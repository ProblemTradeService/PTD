package com.example.myhomework.service;
import com.example.myhomework.dto.MemberForm;
import com.example.myhomework.dto.ProblemForm;
import com.example.myhomework.dto.ProblemPlagiarizeListForm;
import com.example.myhomework.dto.ProblemSimilarListForm;
import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import com.example.myhomework.entity.ProblemPlagiarizeList;
import com.example.myhomework.entity.ProblemSimilarList;
import com.example.myhomework.repository.MemberRepository;
import com.example.myhomework.repository.ProblemPlagiarizeListRepository;
import com.example.myhomework.repository.ProblemRepository;
import com.example.myhomework.repository.ProblemSimilarityListRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service

public class ProblemPlagiarizeListService {
    @Autowired
    ProblemPlagiarizeListRepository problemPlagiarizeListRepository;

    public ProblemPlagiarizeList create(ProblemPlagiarizeListForm dto){
        ProblemPlagiarizeList problemplagiarizeList=dto.toEntity();
        /*
        if(problemSimilarList.getProblemPK() != null){
            return null;
        }*/
        return problemPlagiarizeListRepository.save(problemplagiarizeList);
    }

    public List<ProblemPlagiarizeList> index() {return problemPlagiarizeListRepository.findAll();}
}
