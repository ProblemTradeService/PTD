package com.example.myhomework.dto;

import com.example.myhomework.entity.ProblemPlagiarizeList;
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

public class ProblemPlagiarizeListForm {

    @JsonProperty
    private Long pid1;
    @JsonProperty
    private Long pid2;

    @JsonProperty
    private String plagiarize;

    public ProblemPlagiarizeList toEntity(){
        //return new ProblemPlagiarizeList(new ProblemPlagiarizeListPK(pid1,pid2),plagiarize);
        return null;
    }

}
