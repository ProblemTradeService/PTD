package com.example.myhomework.service;

import com.example.myhomework.dto.MemberForm;
import com.example.myhomework.dto.ProblemForm;
import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import com.example.myhomework.repository.MemberRepository;
import com.example.myhomework.repository.ProblemRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service

public class ProblemService {
    @Autowired
    private ProblemRepository problemRepository;

    public List<Problem> index() {return problemRepository.findAll();}

    public Problem show(Long id){return problemRepository.findById(id).orElse(null);}

    public Problem create(ProblemForm dto){
        Problem problem=dto.toEntity();
        if(problem.getId() != null){
            return null;
        }
        return problemRepository.save(problem);
    }

    public List<Problem> showSpecial() {
        List<Problem> problems;
        //적당한 조건 붙이면 됨.
        problems=problemRepository.find();

        return problems;

    }
}
