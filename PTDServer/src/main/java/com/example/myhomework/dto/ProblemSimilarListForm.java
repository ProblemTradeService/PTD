package com.example.myhomework.dto;

import com.example.myhomework.complexKey.ProblemSimilarityListPK;
import com.example.myhomework.entity.ProblemSimilarList;
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

public class ProblemSimilarListForm {
    @JsonProperty
    private Long pid1;
    @JsonProperty
    private Long pid2;

    @JsonProperty
    private String similarity;

    @JsonProperty
    private String plagiarize;
    public ProblemSimilarList toEntity(){
        return new ProblemSimilarList(new ProblemSimilarityListPK(pid1,pid2),similarity,plagiarize);
    }
}
