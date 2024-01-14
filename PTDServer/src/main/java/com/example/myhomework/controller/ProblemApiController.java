package com.example.myhomework.controller;

import com.example.myhomework.dto.FileForm;
import com.example.myhomework.dto.MemberForm;
import com.example.myhomework.dto.ProblemForm;
import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import com.example.myhomework.repository.MemberRepository;
import com.example.myhomework.repository.ProblemRepository;
import com.example.myhomework.service.MemberService;
import com.example.myhomework.service.ProblemService;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.util.LinkedMultiValueMap;
import java.io.FileOutputStream;




import javax.swing.text.html.HTML;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController

public class ProblemApiController {
    //private static final String IMAGE_DIR = "/Users/myoungjae/Projects/PTD/images/";
    private static final String IMAGE_DIR = "D:/Projects/PTD/images/";
    @Autowired
    private ProblemRepository problemRepository;

    @Autowired
    private ProblemService problemService;
    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/api/problems")
    public List<Problem> index(){
        return problemService.index();
    }

    @GetMapping("/api/problems/{pid}")
    public Problem show(@PathVariable Long pid){
        return problemService.show(pid);
    }

    @GetMapping("/api/problems/special")
    public List<Problem> showSpecial(){
        return problemService.showSpecial();
    }

//    @GetMapping("/api/problems/category/{id}")
//    public ResponseEntity<FileSystemResource> display(@PathVariable("id") Long pid){
//        String path="C:/Image/problem"+pid+".jpg";
//        FileSystemResource resource=  new FileSystemResource(path);
//
//        HttpHeaders header = new HttpHeaders();
//        Path filePath= null;
//
//        try{
//            filePath=Paths.get(path);
//            header.add("Content-Type",Files.probeContentType(filePath));
//        }catch (IOException e){
//            e.printStackTrace();
//        }
//        return new ResponseEntity<FileSystemResource>(resource,header,HttpStatus.OK);
//    }

    @PostMapping("/api/problems")
    public ResponseEntity<Problem> crate(@RequestBody ProblemForm dto){
        log.info(dto.toString());
        Problem created=problemService.create(dto);
        return (created !=null)?
                ResponseEntity.status(HttpStatus.OK).body(created):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @PostMapping("/api/problems/image")
    public String createFile(@RequestParam("file") List<MultipartFile> file) throws IOException {
        for(int i=1;i<=file.size();i++) {
            String filePath = IMAGE_DIR + "problem"+i+".png";
            Path imagePath = Paths.get(filePath);
            try {
                Files.write(imagePath, file.get(i-1).getBytes());
            } catch (Exception e) {
            }
        }

//        List<File> f = null;
//        for(int i=0;;i++){
//            File fff=new File(IMAGE_DIR + "problem"+i+".png");
//            if(fff==null) {
//                break;
//            }
//            f.add(fff);
//        }

        uploadFile(file.get(0), file.get(1));

        return "kkkk";
    }

    public String uploadFile(MultipartFile multipartFile1, MultipartFile multipartFile2) throws IOException {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        FileSystemResource fileResource1 = new FileSystemResource(convertMultiPartToFile(multipartFile1));
        FileSystemResource fileResource2 = new FileSystemResource(convertMultiPartToFile(multipartFile2));

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();

        body.add("problem", fileResource1);
        body.add("solvingProcess", fileResource2);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        String serverUrl = "http://localhost:8000/plagiarism";

        String result = restTemplate.postForObject(serverUrl, requestEntity, String.class);
        log.info(result);
        return result;
    }

    private File convertMultiPartToFile(MultipartFile file) throws IOException {
        File convFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }
}
