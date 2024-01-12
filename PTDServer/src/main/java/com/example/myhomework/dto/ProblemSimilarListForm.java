package com.example.myhomework.dto;

import com.example.myhomework.complexKey.ProblemSimilarityListPK;
import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import com.example.myhomework.entity.ProblemSimilarList;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

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

    public ProblemSimilarList toEntity(){
        return new ProblemSimilarList(new ProblemSimilarityListPK(pid1,pid2),similarity);
    }
}
