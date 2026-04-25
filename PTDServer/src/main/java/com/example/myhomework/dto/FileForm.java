package com.example.myhomework.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.core.io.FileSystemResource;

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
