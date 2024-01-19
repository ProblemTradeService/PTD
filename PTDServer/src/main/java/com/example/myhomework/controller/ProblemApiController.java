package com.example.myhomework.controller;

import com.example.myhomework.complexKey.ProblemSimilarityListPK;
import com.example.myhomework.dto.FileForm;
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
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.util.LinkedMultiValueMap;
import java.io.FileOutputStream;


import java.util.*;
import javax.swing.text.html.HTML;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.http.MediaType;
@Slf4j
@RestController

public class ProblemApiController {
    @Autowired
    private ProblemRepository problemRepository;

    @Autowired
    private ProblemSimilarityListRepository problemSimilarityListRepository;

    @Autowired
    private ProblemService problemService;

    @GetMapping("/api/problems")
    public List<Problem> showAllProblems(){
        return problemService.index();
    }

    @GetMapping("/api/problems/info/pid/{pid}")
    public Problem getInfoByPid(@PathVariable Long pid){
        return problemService.show(pid);
    }

    @GetMapping("/api/problems/image/pid/{pid}")
    public ResponseEntity<byte[]> getImageByPid(@PathVariable("pid") Long pid) throws UnsupportedEncodingException{
        ResponseEntity<byte[]> response=problemService.getImageById(pid);
        return response;
    }

    @GetMapping("/api/problems/image/category/{category}")
    public MultiValueMap<String, ResponseEntity<byte[]>> getImageByCategory(@PathVariable("category") String category) throws UnsupportedEncodingException {
        MultiValueMap<String, ResponseEntity<byte[]>> responseMap = problemService.getImageByCategory(category);
        return responseMap;
    }

    @GetMapping("/api/problems/info/category/{category}")
    public List<Problem> getInfoByCategory(@PathVariable("category") String category) throws UnsupportedEncodingException {
        List<Problem> problems = problemService.getInfoByCategory(category);
        return problems;
    }

    @PostMapping("/api/problems")
    public ResponseEntity<Problem> crateProblem(@RequestBody ProblemForm dto){
        Problem created=problemService.create(dto);
        return (created !=null)?
                ResponseEntity.status(HttpStatus.OK).body(created):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @PostMapping("/api/problems/image")
    public String createProblemFile(@RequestParam("problemfile") MultipartFile file1, @RequestParam("solutionfile") MultipartFile file2) throws IOException, InterruptedException {
        String s=problemService.createProblemFile(file1,file2);
        return s;
    }
}
