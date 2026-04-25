package com.example.myhomework.controller;

import com.example.myhomework.entity.UserBalance;
import com.example.myhomework.service.UserBalanceService;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
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
