package com.example.myhomework.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor

public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long level;
    @Column
    private Long price;

    @Column
    private String owner;
    @Column
    private String category;

    @Column
    private String plaglevel;

}
