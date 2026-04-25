package com.example.myhomework.service;

import com.example.myhomework.entity.UserBalance;
import com.example.myhomework.repository.UserBalanceRepository;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service

public class UserBalanceService {

    @Autowired
    UserBalanceRepository userBalanceRepository;
    public List<UserBalance> getUser() {
        List<UserBalance> userBalances = userBalanceRepository.findAll();
        return userBalances;
    }

    public UserBalance getUserBalance(String userName) {
        UserBalance userBalance = userBalanceRepository.findUserName(userName);
        return userBalance;
    }
}
