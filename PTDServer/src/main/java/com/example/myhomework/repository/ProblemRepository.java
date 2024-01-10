package com.example.myhomework.repository;

import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.ArrayList;

public interface ProblemRepository extends CrudRepository<Problem, Long>{

    @Query(value="SELECT * FROM Problem WHERE Problem.level = 4 ",nativeQuery = true)
    List<Problem> find();

    @Override
    ArrayList<Problem> findAll();
}
