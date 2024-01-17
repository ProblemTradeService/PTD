package com.example.myhomework.controller;

import com.example.myhomework.dto.FileForm;
import com.example.myhomework.dto.MemberForm;
import com.example.myhomework.dto.ProblemForm;
import com.example.myhomework.dto.ProblemSimilarListForm;
import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import com.example.myhomework.entity.ProblemSimilarList;
import com.example.myhomework.repository.MemberRepository;
import com.example.myhomework.repository.ProblemRepository;
import com.example.myhomework.repository.ProblemSimilarityListRepository;
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


import java.util.*;
import javax.swing.text.html.HTML;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.http.MediaType;
@Slf4j
@RestController

public class ProblemApiController {

    private static final String IMAGE_DIR = "/Users/myoungjae/Projects/PTD/images/";
    //private static final String IMAGE_DIR = "C:/Image/";
    @Autowired
    private ProblemRepository problemRepository;

    @Autowired
    private ProblemSimilarityListRepository problemSimilarityListRepository;
    private Long pid=0L;

    @Autowired
    private ProblemService problemService;
    private final RestTemplate restTemplate = new RestTemplate();


    @GetMapping("/api/problems")
    public List<Problem> showAllProblems(){
        return problemService.index();
    }

    @GetMapping("/api/problems/info/pid/{pid}")
    public Problem getInfoByPid(@PathVariable Long pid){
        return problemService.show(pid);
    }

    @GetMapping("/api/problems/image/pid/{pid}")
    public ResponseEntity<byte[]> getImageByPid(@PathVariable("pid") Long pid) throws UnsupportedEncodingException{
        String path=IMAGE_DIR + "problem" +pid +".jpg";
        HttpHeaders header=new HttpHeaders();
        Path filePath;
        try{
            filePath=Paths.get(path);
            header.setContentType(MediaType.IMAGE_JPEG);
            byte[] imageBytes = Files.readAllBytes(filePath);
            return new ResponseEntity<>(imageBytes, header, HttpStatus.OK);
        }catch (IOException e){
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping("/api/problems/image/category/{category}")
    public MultiValueMap<String, ResponseEntity<byte[]>> getImageByCategory(@PathVariable("category") String category) throws UnsupportedEncodingException {
        String decodedString = URLDecoder.decode(category, StandardCharsets.UTF_8.toString());
        List<Problem> problems = problemRepository.findCategory(category);

        MultiValueMap<String, ResponseEntity<byte[]>> responseMap=new LinkedMultiValueMap<>();


        for(Problem problem : problems){
            log.info(problem.toString());
            String path="C:/Image/problem"+problem.getId()+".jpg";
            HttpHeaders header = new HttpHeaders();
            Path filePath;

            try {
                filePath = Paths.get(path);
                header.setContentType(MediaType.IMAGE_JPEG);
                byte[] imageBytes = Files.readAllBytes(filePath);
                ResponseEntity<byte[]> responseEntity = new ResponseEntity<>(imageBytes, header, HttpStatus.OK);
                responseMap.add("image", responseEntity);
            }catch (IOException e) {
                e.printStackTrace();
            }
        }
        return responseMap;
    }

    @GetMapping("/api/problems/info/category/{category}")
    public List<Problem> getInfoByCategory(@PathVariable("category") String category) throws UnsupportedEncodingException {
        String decodedString = URLDecoder.decode(category, StandardCharsets.UTF_8.toString());
        List<Problem> problems = problemRepository.findCategory(category);

        return problems;
    }

    @PostMapping("/api/problems")
    public ResponseEntity<Problem> crateProblem(@RequestBody ProblemForm dto){
        Problem created=problemService.create(dto);
        return (created !=null)?
                ResponseEntity.status(HttpStatus.OK).body(created):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @PostMapping("/api/problems/image")
    public String createProblemFile(@RequestParam("problemFile") MultipartFile file1, @RequestParam("solutionFile") MultipartFile file2) throws IOException, InterruptedException {
        if(pid==0){
            Problem p= problemRepository.findFirstByOrderByIdDesc();
            pid=p.getId()+1L;
        }
        String filePath1 = IMAGE_DIR + "problem" + pid + ".jpg";
        String filePath2 = IMAGE_DIR + "solution" + pid + ".jpg";

        File newFile1=convertMultiPartToFile(file1,"problem");
        File newFile2=convertMultiPartToFile(file2,"solution");

        pid++;

//        Path imagePath1 = Paths.get(filePath1);
//        Path imagePath2 = Paths.get(filePath2);
//        try {
//            Files.write(imagePath1, file1.getBytes());
//            Files.write(imagePath2, file2.getBytes());
//            pid++;
//        } catch (Exception e) {
//
//        }
        //uploadFile(newFile1, newFile2);

        //DB에 있는 해당 문제 표절 수준 업데이트 및, DB SimilarList에 추가하기
        //Thread.sleep(30000);

        Problem p= problemRepository.findFirstByOrderByIdDesc();
        p.setPlaglevel("매우 높음");
        log.info(p.toString());
        problemRepository.save(p);

        List<String> stringList = new ArrayList<>(Arrays.asList("매우 높음", "매우 낮음", "매우 높음","높음", "매우 낮음","보통","매우 낮음","매우 높음","높음","매우 높음","낮음","매우 낮음"));
        for(int i=0;i<stringList.size();i++){
            ProblemSimilarListForm dto=new ProblemSimilarListForm(p.getId(),(long)i+1,stringList.get(i),stringList.get(i));
            ProblemSimilarList problemEntity=dto.toEntity();
            problemSimilarityListRepository.save(problemEntity);
        }
        return "kkkk";
    }

    public String uploadFile(File File1, File File2) throws IOException {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        List<File> problemFiles = new ArrayList<>();
        List<File> solutionFiles = new ArrayList<>();
        List<FileSystemResource> problemsResource = new ArrayList<>();
        List<FileSystemResource> solutionResource = new ArrayList<>();

        for(int i=0;;i++) {
            problemFiles.add(new File(IMAGE_DIR + "problem" + (i+1) + ".jpg"));
            solutionFiles.add(new File(IMAGE_DIR + "solution" + (i+1) + ".jpg"));
            if(!problemFiles.get(i).exists()){
                break;
            }
            problemsResource.add(new FileSystemResource(problemFiles.get(i)));
            solutionResource.add(new FileSystemResource(solutionFiles.get(i)));
        }

        FileSystemResource fileResource1 = new FileSystemResource(File1);
        FileSystemResource fileResource2 = new FileSystemResource(File2);

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();

        body.add("problem", fileResource1);
        body.add("solvingProcess", fileResource2);
        for(FileSystemResource problem : problemsResource){
            body.add("problems", problem);
        }
        for(FileSystemResource sol : solutionResource){
            body.add("solvingProcesses", sol);
        }

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        String serverUrl = "http://localhost:8000/plagiarism";

        List<String> result = restTemplate.postForObject(serverUrl, requestEntity, List.class);
        for(String str : result){
            log.info(str);
        }
        return null;
    }

    private File convertMultiPartToFile(MultipartFile file, String type) throws IOException {
        File convFile = new File(IMAGE_DIR + type + pid + ".jpg");
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }
}
