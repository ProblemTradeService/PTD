package com.example.myhomework.entity;


import com.example.myhomework.complexKey.ProblemSimilarityListPK;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor


public class ProblemPlagiarizeList {
    @EmbeddedId
    private ProblemSimilarityListPK problemPK;

    @Column
    private String plagiarize;

    public ProblemSimilarityListPK getProblemPK() {
        return problemPK;
    }
}
