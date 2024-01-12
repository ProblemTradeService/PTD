package com.example.myhomework.controller;

import com.example.myhomework.dto.MemberForm;
import com.example.myhomework.entity.Member;
import com.example.myhomework.repository.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;

@Slf4j
@Controller
public class MemberController {
    @Autowired
    MemberRepository memberRepository;
    @GetMapping("/members/new")
    public String newMember(){
        return "members/new";
    }

    @PostMapping("/members/join")
    public String CreateMember(MemberForm M) {
        log.info(M.toString());
        Member mem=M.toEntity();
        Member saved=memberRepository.save(mem);
        return "redirect:/members/"+saved.getId();
    }

    @GetMapping("/members/{id}")
    public String show(@PathVariable Long id, Model model){
        Member memberEntity=memberRepository.findById(id).orElse(null);
        model.addAttribute("member",memberEntity);
        return "members/show";
    }

    @GetMapping("/members")
    public String index(Model model){
        ArrayList<Member> memberEntityList=memberRepository.findAll();
        model.addAttribute("memberList",memberEntityList);
        return "members/index";
    }

    @GetMapping("/members/{id}/edit")
    public String edit(@PathVariable Long id, Model model){
        Member memberEntity=memberRepository.findById(id).orElse(null);
        model.addAttribute("member",memberEntity);
        return "members/edit";
    }

    @PostMapping("/member/update")
    public String edit(MemberForm M){
        Member memberEntity=M.toEntity();
        Member target=memberRepository.findById(memberEntity.getId()).orElse(null);
        if(target!=null) {
            memberRepository.save(memberEntity);
        }
        return "redirect:/members/"+memberEntity.getId();
    }

    @GetMapping("members/{id}/delete")
    public String delete(@PathVariable Long id){
        Member target=memberRepository.findById(id).orElse(null);
        if(target != null){
            memberRepository.delete(target);
        }
        return "redirect:/members";
    }
}
