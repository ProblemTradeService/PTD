package com.example.myhomework.service;

import com.example.myhomework.dto.MemberForm;
import com.example.myhomework.entity.Member;
import com.example.myhomework.repository.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class MemberService {
    @Autowired
    private MemberRepository memberRepository;

    public List<Member> index() {return memberRepository.findAll();}

    public Member show(Long id){return memberRepository.findById(id).orElse(null);}

    public Member create(MemberForm dto){
        Member member=dto.toEntity();
        if(member.getId() != null){
            return null;
        }
        return memberRepository.save(member);
    }

    public List<Member> showSpecial() {
        List<Member> members;
        //적당한 조건 붙이면 됨
        members=memberRepository.find();

        return members;
    }
}
