package com.example.myhomework.controller;

import com.example.myhomework.dto.MemberForm;
import com.example.myhomework.dto.ProblemForm;
import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import com.example.myhomework.repository.MemberRepository;
import com.example.myhomework.repository.ProblemRepository;
import com.example.myhomework.service.MemberService;
import com.example.myhomework.service.ProblemService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Slf4j
@RestController

public class ProblemApiController {
    @Autowired
    private ProblemRepository problemRepository;

    @Autowired
    private ProblemService problemService;

    @GetMapping("/api/problems")
    public List<Problem> index(){
        return problemService.index();
    }

    @GetMapping("/api/problems/{pid}")
    public Problem show(@PathVariable Long pid){
        return problemService.show(pid);
    }

    @GetMapping("/api/problems/special")
    public List<Problem> showSpecial(){
        return problemService.showSpecial();
    }

    @PostMapping("/api/problems")
    public ResponseEntity<Problem> crate(@RequestBody ProblemForm dto){
        Problem created=problemService.create(dto);
        /*
        if(!file.isEmpty() && file != null){
            String fullPath="C:/Users/이세영/Desktop/kkk"+"hi";
            file.transferTo(new File(fullPath));
        }
        */
        return (created !=null)?
                ResponseEntity.status(HttpStatus.OK).body(created):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}
