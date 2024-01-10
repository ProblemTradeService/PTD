package com.example.myhomework.dto;

import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Setter

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

    //@JsonProperty
    //private MultipartFile file;

    public Problem toEntity() {
        return new Problem(id,level,price,owner,category);
    }
}
