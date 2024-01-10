package com.example.myhomework.controller;

import com.example.myhomework.dto.MemberForm;
import com.example.myhomework.entity.Member;
import com.example.myhomework.repository.MemberRepository;
import com.example.myhomework.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
public class MemberApiController {
    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private MemberService memberService;

    @GetMapping("/api/members")
    public List<Member> index(){
        return memberService.index();
    }

    @GetMapping("/api/members/{id}")
    public Member show(@PathVariable Long id){
        return memberService.show(id);
    }

    @GetMapping("/api/members/special")
    public List<Member> showSpecial(){
        return memberService.showSpecial();
    }

    @PostMapping("/api/members")
    public ResponseEntity<Member> crate(@RequestBody MemberForm dto){
        Member created=memberService.create(dto);
        return (created !=null)?
                ResponseEntity.status(HttpStatus.OK).body(created):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}
