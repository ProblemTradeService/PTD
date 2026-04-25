package com.example.myhomework.repository;

import com.example.myhomework.complexKey.ProblemSimilarityListPK;
import com.example.myhomework.entity.ProblemSimilarList;
import java.util.ArrayList;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ProblemSimilarityListRepository extends CrudRepository<ProblemSimilarList, ProblemSimilarityListPK>{

    @Query(value="SELECT * FROM PROBLEM_SIMILAR_LIST s WHERE s.pid1 = :pid and s.SIMILARITY LIKE '[%높음]'", nativeQuery = true)
    ArrayList<ProblemSimilarList> findSimilarProblem(@Param("pid") Long pid);

    @Query(value="SELECT * FROM PROBLEM_SIMILAR_LIST s WHERE s.pid1 = :pid",nativeQuery = true)
    ArrayList<ProblemSimilarList> findByPid1(@Param("pid") Long pid);

    @Query(value="SELECT * FROM PROBLEM_SIMILAR_LIST s WHERE s.pid1 = :pid and s.PLAGIARIZE LIKE '[%높음]'", nativeQuery = true)
    ArrayList<ProblemSimilarList> findPlagiarizeProblem(@Param("pid") Long pid);

    @Override
    ArrayList<ProblemSimilarList> findAll();
}
