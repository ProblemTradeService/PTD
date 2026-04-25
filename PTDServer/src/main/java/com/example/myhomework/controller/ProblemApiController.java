package com.example.myhomework.controller;

import com.example.myhomework.dto.DealForm;
import com.example.myhomework.dto.ProblemForm;
import com.example.myhomework.entity.Problem;
import com.example.myhomework.repository.ProblemRepository;
import com.example.myhomework.repository.ProblemSimilarityListRepository;
import com.example.myhomework.service.ProblemService;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
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

    @GetMapping("/api/problems/my/{owner}/{status}")
    public List<Problem> getMyProblem(@PathVariable String owner, @PathVariable String status) throws UnsupportedEncodingException {
        List<Problem> problems=problemService.getMyProblem(owner,status);
        return problems;
    }

    @GetMapping("/api/problems/upload/cancel/{pid}")
    public String problemUploadCancel(@PathVariable Long pid){
        String s=problemService.problemUploadCancel(pid);
        return s;
    }
    @PostMapping("/api/problems")
    public ResponseEntity<Problem> crateProblem(@RequestBody ProblemForm dto){
        Problem created=problemService.create(dto);
        return (created !=null)?
                ResponseEntity.status(HttpStatus.OK).body(created):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @PostMapping("/api/problems/image")
    public String createProblemFile(@RequestParam("problemFile") MultipartFile file1, @RequestParam("solutionFile") MultipartFile file2) throws IOException, InterruptedException {
        String s=problemService.createProblemFile(file1,file2);
        return s;
    }

    @PostMapping("/api/deal")
    public boolean dealProblem(@RequestBody DealForm dto) throws IOException{
        String response = problemService.dealProblem(dto.getId(),dto.getBuyer());
        if(response.equals("success")){
            return true;
        }
        else{
            return false;
        }
    }
}
