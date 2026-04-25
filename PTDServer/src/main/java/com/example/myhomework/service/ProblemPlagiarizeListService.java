package com.example.myhomework.service;

import com.example.myhomework.dto.ProblemPlagiarizeListForm;
import com.example.myhomework.entity.ProblemPlagiarizeList;
import com.example.myhomework.repository.ProblemPlagiarizeListRepository;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
