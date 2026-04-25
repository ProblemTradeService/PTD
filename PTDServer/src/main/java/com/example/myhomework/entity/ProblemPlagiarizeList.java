package com.example.myhomework.entity;


import com.example.myhomework.complexKey.ProblemSimilarityListPK;
import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

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
