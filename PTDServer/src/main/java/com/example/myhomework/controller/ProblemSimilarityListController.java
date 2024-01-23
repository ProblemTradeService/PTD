package com.example.myhomework.controller;

import com.example.myhomework.dto.MemberForm;
import com.example.myhomework.dto.ProblemForm;
import com.example.myhomework.dto.ProblemSimilarListForm;
import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import com.example.myhomework.entity.ProblemSimilarList;
import com.example.myhomework.repository.MemberRepository;
import com.example.myhomework.repository.ProblemRepository;
import com.example.myhomework.repository.ProblemSimilarityListRepository;
import com.example.myhomework.service.MemberService;
import com.example.myhomework.service.ProblemService;
import com.example.myhomework.service.ProblemSimilarityService;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.text.html.HTML;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
public class ProblemSimilarityListController {

    @Autowired
    ProblemRepository problemRepository;
    @Autowired
    ProblemSimilarityService problemSimilarityService;

    @Autowired
    ProblemSimilarityListRepository problemSimilarityListRepository;

    @GetMapping("/api/problems/similarity")
    public List<ProblemSimilarList> getSimilarity(){
        return problemSimilarityService.index();
    }

    @GetMapping("/api/problems/similar/info/{pid}")
    public List<Problem> getSimilarProblemInfo(@PathVariable Long pid){
        return problemSimilarityService.getSimilarProblemInfo(pid);
    }

    @GetMapping("/api/problems/similar/image/{pid}")
    public MultiValueMap<String, ResponseEntity<byte[]>> getSimilarProblem(@PathVariable Long pid){
        List<ProblemSimilarList> problemSimilarLists = problemSimilarityListRepository.findSimilarProblem(pid);

        MultiValueMap<String, ResponseEntity<byte[]>> responseMap=new LinkedMultiValueMap<>();
        getImage(problemSimilarLists,responseMap);

        return responseMap;
    }

    @GetMapping("/api/problems/plagiarize/info/{pid}")
    public List<Problem> getPlagiarizeProblemInfo(@PathVariable Long pid){
        List<ProblemSimilarList> problemPlagiarizeLists = problemSimilarityListRepository.findPlagiarizeProblem(pid);
        List<Problem> problems=getInfo(problemPlagiarizeLists);
        return problems;
    }

    @GetMapping("/api/problems/plagiarize/image/{pid}")
    public MultiValueMap<String, ResponseEntity<byte[]>> getPlagiarizeProblemImage(@PathVariable Long pid){
        List<ProblemSimilarList> problemPlagiarizeLists = problemSimilarityListRepository.findPlagiarizeProblem(pid);

        MultiValueMap<String, ResponseEntity<byte[]>> responseMap=new LinkedMultiValueMap<>();
        getImage(problemPlagiarizeLists,responseMap);
        return responseMap;
    }

    @PostMapping("/api/problems/similarity")
    public ResponseEntity<ProblemSimilarList> create(@RequestBody ProblemSimilarListForm dto){
        log.info(dto.toString());
        ProblemSimilarList created=problemSimilarityService.create(dto);
        return (created !=null)?
                ResponseEntity.status(HttpStatus.OK).body(created):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    public List<Problem> getInfo(List<ProblemSimilarList> problemSimilarLists){
        List<Problem> problems=new ArrayList<>();
        for(ProblemSimilarList problemSimilar : problemSimilarLists){
            Long pid=problemSimilar.getProblemPK().getPid2();
            Problem p=problemRepository.findById(pid).orElse(null);
            problems.add(p);
        }
        return problems;
    }

    public void getImage(List<ProblemSimilarList> problemSimlarList,  MultiValueMap<String, ResponseEntity<byte[]>> responseMap) {
        for (ProblemSimilarList problemSimilar : problemSimlarList) {
            String path = "C:/Image/problem" + problemSimilar.getProblemPK().getPid2() + ".jpg";
            Problem p=problemRepository.findById(problemSimilar.getProblemPK().getPid2()).orElse(null);
            if(!p.getStatus().equals("판매중"))
                continue;
            log.info(problemSimilar.toString());
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
