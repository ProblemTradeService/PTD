package com.example.myhomework.dto;

import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.core.io.FileSystemResource;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.io.File;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Setter
@Getter

public class FileForm {
    public FileSystemResource problem;
    public FileSystemResource solution;

    public void setProblem(FileSystemResource problem) {
        this.problem = problem;
    }

    public void setSolution(FileSystemResource solution) {
        this.solution = solution;
    }
}
