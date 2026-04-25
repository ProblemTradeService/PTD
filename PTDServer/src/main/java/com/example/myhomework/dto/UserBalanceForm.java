package com.example.myhomework.dto;

import com.example.myhomework.entity.UserBalance;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Setter
@Getter

public class UserBalanceForm {

    @JsonProperty
    private Long id;

    @JsonProperty
    private String username;

    @JsonProperty
    private Long balance;

    public UserBalance toEntity() {
        return new UserBalance(id,username,balance);
    }
}
