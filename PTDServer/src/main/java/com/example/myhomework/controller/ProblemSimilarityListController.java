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
    ProblemSimilarityService problemSimilarityService;

    @Autowired
    ProblemSimilarityListRepository problemSimilarityListRepository;

    @GetMapping("/api/problems/similarity")
    public List<ProblemSimilarList> index(){
        return problemSimilarityService.index();
    }

    @GetMapping("/api/problems/similar/{pid}")
    public MultiValueMap<String, ResponseEntity<byte[]>> getSimilarProblem(@PathVariable Long pid){
        List<ProblemSimilarList> problemSimilarLists = problemSimilarityListRepository.findSimilarProblem(pid);
        List<Long> pidList= new ArrayList<>();
        for(int i=0;i<problemSimilarLists.size();i++){
            pidList.add(problemSimilarLists.get(i).getProblemPK().getPid2());
        }
        log.info(pidList.toString());
        //pidList에 해당하는 이미지 전송

        MultiValueMap<String, ResponseEntity<byte[]>> responseMap=new LinkedMultiValueMap<>();

        for(Long problemId : pidList) {
            log.info(problemId.toString());
            String path = "C:/Image/problem" + problemId + ".jpg";
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
}
