package com.example.myhomework.service;

import com.example.myhomework.dto.MemberForm;
import com.example.myhomework.dto.ProblemForm;
import com.example.myhomework.dto.ProblemSimilarListForm;
import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import com.example.myhomework.entity.ProblemSimilarList;
import com.example.myhomework.repository.MemberRepository;
import com.example.myhomework.repository.ProblemRepository;
import com.example.myhomework.repository.ProblemSimilarityListRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PathVariable;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service

public class ProblemSimilarityService {

    @Autowired
    ProblemRepository problemRepository;
    @Autowired
    ProblemSimilarityListRepository problemSimilarityListRepository;


    public ProblemSimilarList create(ProblemSimilarListForm dto){
        ProblemSimilarList problemSimilarList=dto.toEntity();
        /*
        if(problemSimilarList.getProblemPK() != null){
            return null;
        }*/
        return problemSimilarityListRepository.save(problemSimilarList);
    }

    public List<ProblemSimilarList> index() {return problemSimilarityListRepository.findAll();}


    public List<Problem> getSimilarProblemInfo(Long pid){
        List<ProblemSimilarList> problemSimilarLists = problemSimilarityListRepository.findSimilarProblem(pid);
        List<Problem> problems=getInfo(problemSimilarLists);
        return problems;
    }

    public List<Problem> getInfo(List<ProblemSimilarList> problemSimilarLists){
        List<Problem> problems=new ArrayList<>();
        for(ProblemSimilarList problemSimilar : problemSimilarLists){
            Long pid=problemSimilar.getProblemPK().getPid2();
            Problem p=problemRepository.findById(pid).orElse(null);
            log.info(p.toString());
            if(p.getStatus().equals("판매중")) {
                problems.add(p);
            }
        }
        return problems;
    }

    public void getImage(List<ProblemSimilarList> problemSimlarList,  MultiValueMap<String, ResponseEntity<byte[]>> responseMap) {
        for (ProblemSimilarList problemSimilar : problemSimlarList) {
            log.info(problemSimlarList.toString());
            String path = "C:/Image/problem" + problemSimilar.getProblemPK().getPid2() + ".jpg";
            HttpHeaders header = new HttpHeaders();
            Path filePath;

            try {
                filePath = Paths.get(path);
                header.setContentType(MediaType.IMAGE_JPEG);
                byte[] imageBytes = Files.readAllBytes(filePath);
                ResponseEntity<byte[]> responseEntity = new ResponseEntity<>(imageBytes, header, HttpStatus.OK);
                responseMap.add("image", responseEntity);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

}
