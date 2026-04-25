package com.example.myhomework.dto;

import com.example.myhomework.entity.Problem;
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

    @JsonProperty
    private String status;

    //@JsonProperty
    //private MultipartFile file;


    public Problem toEntity() {
        return new Problem(id,level,price,owner,category,plaglevel,status);
    }
}
