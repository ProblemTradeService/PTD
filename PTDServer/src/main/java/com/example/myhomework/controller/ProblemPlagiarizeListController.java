package com.example.myhomework.controller;

import com.example.myhomework.dto.ProblemPlagiarizeListForm;
import com.example.myhomework.entity.ProblemPlagiarizeList;
import com.example.myhomework.service.ProblemPlagiarizeListService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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
