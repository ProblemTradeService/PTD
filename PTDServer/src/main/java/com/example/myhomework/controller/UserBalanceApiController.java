package com.example.myhomework.controller;

import com.example.myhomework.complexKey.ProblemSimilarityListPK;
import com.example.myhomework.dto.FileForm;
import com.example.myhomework.dto.MemberForm;
import com.example.myhomework.dto.ProblemForm;
import com.example.myhomework.dto.ProblemSimilarListForm;
import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import com.example.myhomework.entity.ProblemSimilarList;
import com.example.myhomework.entity.UserBalance;
import com.example.myhomework.repository.MemberRepository;
import com.example.myhomework.repository.ProblemRepository;
import com.example.myhomework.repository.ProblemSimilarityListRepository;
import com.example.myhomework.service.MemberService;
import com.example.myhomework.service.ProblemService;
import com.example.myhomework.service.UserBalanceService;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.util.LinkedMultiValueMap;
import java.io.FileOutputStream;


import java.util.*;
import javax.swing.text.html.HTML;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.http.MediaType;
@Slf4j
@RestController

public class UserBalanceApiController {
    @Autowired
    UserBalanceService userBalanceService;

    @GetMapping("/api/userBalance")
    public List<UserBalance> getUser(){
        List<UserBalance> userBalances=userBalanceService.getUser();
        return userBalances;
    }

    @GetMapping("/api/userBalance/{userName}")
    public UserBalance getUserBalance(@PathVariable String userName){
        UserBalance userBalance=userBalanceService.getUserBalance(userName);
        return userBalance;
    }
}
