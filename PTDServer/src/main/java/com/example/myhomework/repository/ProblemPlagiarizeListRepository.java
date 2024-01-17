package com.example.myhomework.repository;
import com.example.myhomework.complexKey.ProblemPlagiarizeListPK;
import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import com.example.myhomework.entity.ProblemPlagiarizeList;
import com.example.myhomework.entity.ProblemSimilarList;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.ArrayList;

public interface ProblemPlagiarizeListRepository extends CrudRepository<ProblemPlagiarizeList, ProblemPlagiarizeListPK> {
    @Override
    ArrayList<ProblemPlagiarizeList> findAll();
}
