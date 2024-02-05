package com.example.myhomework.entity;

import com.example.myhomework.complexKey.ProblemSimilarityListPK;
import javax.persistence.*;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor

public class ProblemSimilarList {

    @EmbeddedId
    private ProblemSimilarityListPK problemPK;

    @Column
    private String similarity;

    @Column
    private String plagiarize;

    public ProblemSimilarityListPK getProblemPK() {
        return problemPK;
    }
}
