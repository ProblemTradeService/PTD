package com.example.myhomework.dto;

import com.example.myhomework.entity.Member;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Setter

public class MemberForm {
    @JsonProperty
    private Long id;
    @JsonProperty
    private String email;
    @JsonProperty
    private String password;

    @JsonProperty
    private String username;

    @JsonProperty
    private Long money;

    public Member toEntity() {
        return new Member(id,email,password,username,money);
    }
}
