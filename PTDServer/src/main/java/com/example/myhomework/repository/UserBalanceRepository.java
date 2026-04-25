package com.example.myhomework.repository;

import com.example.myhomework.entity.UserBalance;
import java.util.ArrayList;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface UserBalanceRepository extends CrudRepository<UserBalance, Long> {

    @Query(value="SELECT * FROM User_Balance WHERE username = :userName ",nativeQuery = true)
    UserBalance findUserName(@Param("userName") String userName);

    @Override
    ArrayList<UserBalance> findAll();
}
