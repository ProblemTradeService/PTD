package com.example.myhomework.repository;

import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.ArrayList;

public interface ProblemRepository extends CrudRepository<Problem, Long>{

    @Query(value="SELECT * FROM Problem WHERE Problem.level = 4 ",nativeQuery = true)
    List<Problem> find();

    @Query(value="SELECT p FROM Problem p WHERE p.category = :category")
    List<Problem> findCategory(@Param("category") String category);

    Problem findFirstByOrderByIdDesc();

    @Query(value="SELECT p FROM Problem p WHERE p.owner = :owner and p.status= :status")
    List<Problem> findMyProblem(@Param("owner") String owner,@Param("status") String status);

    @Override
    ArrayList<Problem> findAll();
}
