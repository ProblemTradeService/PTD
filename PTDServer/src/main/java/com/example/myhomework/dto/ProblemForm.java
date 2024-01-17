package com.example.myhomework.dto;

import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Setter
@Getter

public class ProblemForm {
    @JsonProperty
    private Long id;
    @JsonProperty
    private Long level;
    @JsonProperty
    private Long price ;
    @JsonProperty
    private String owner;
    @JsonProperty
    private String category;

    @JsonProperty
    private String plaglevel;

    //@JsonProperty
    //private MultipartFile file;


    public Problem toEntity() {
        return new Problem(id,level,price,owner,category,plaglevel);
    }
}
