package com.example.myhomework.repository;

import com.example.myhomework.entity.Member;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.ArrayList;

public interface MemberRepository extends CrudRepository<Member, Long> {


    @Query(value="SELECT * FROM Member WHERE Member.email LIKE 'a%'",nativeQuery = true)
    List<Member> find();

    @Override
    ArrayList<Member> findAll();
}
