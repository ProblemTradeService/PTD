package com.example.myhomework.controller;

import com.example.myhomework.dto.MemberForm;
import com.example.myhomework.dto.ProblemForm;
import com.example.myhomework.dto.ProblemPlagiarizeListForm;
import com.example.myhomework.dto.ProblemSimilarListForm;
import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import com.example.myhomework.entity.ProblemPlagiarizeList;
import com.example.myhomework.entity.ProblemSimilarList;
import com.example.myhomework.repository.MemberRepository;
import com.example.myhomework.repository.ProblemRepository;
import com.example.myhomework.service.MemberService;
import com.example.myhomework.service.ProblemPlagiarizeListService;
import com.example.myhomework.service.ProblemService;
import com.example.myhomework.service.ProblemSimilarityService;
import javax.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.text.html.HTML;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class ProblemPlagiarizeListController {
    @Autowired
    ProblemPlagiarizeListService problemPlagiarizeListService;

    @GetMapping("/api/problems/plagiarize")
    public List<ProblemPlagiarizeList> index(){
        return problemPlagiarizeListService.index();
    }

    @PostMapping("/api/problems/plagiarize")
    public ResponseEntity<ProblemPlagiarizeList> create(@RequestBody ProblemPlagiarizeListForm dto){
        //log.info(dto.toString());
        ProblemPlagiarizeList created=problemPlagiarizeListService.create(dto);
        return (created !=null)?
                ResponseEntity.status(HttpStatus.OK).body(created):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}
