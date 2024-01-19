package com.example.myhomework.service;

import com.example.myhomework.complexKey.ProblemSimilarityListPK;
import com.example.myhomework.dto.MemberForm;
import com.example.myhomework.dto.ProblemForm;
import com.example.myhomework.dto.ProblemSimilarListForm;
import com.example.myhomework.entity.Member;
import com.example.myhomework.entity.Problem;
import com.example.myhomework.entity.ProblemSimilarList;
import com.example.myhomework.repository.MemberRepository;
import com.example.myhomework.repository.ProblemRepository;
import com.example.myhomework.repository.ProblemSimilarityListRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Slf4j
@Service

public class ProblemService {

    //private static final String IMAGE_DIR = "/Users/myoungjae/Projects/PTD/images/";
    private static final String IMAGE_DIR = "C:/Image/";

    private Long pid=0L;

    private final RestTemplate restTemplate = new RestTemplate();

    @Autowired
    private ProblemSimilarityListRepository problemSimilarityListRepository;
    @Autowired
    private ProblemRepository problemRepository;

    public List<Problem> index() {return problemRepository.findAll();}

    public Problem show(Long id){return problemRepository.findById(id).orElse(null);}

    public Problem create(ProblemForm dto){
        Problem problem=dto.toEntity();
        if(problem.getId() != null){
            return null;
        }
        return problemRepository.save(problem);
    }

    public ResponseEntity<byte[]> getImageById(Long pid){
        String path=IMAGE_DIR + "problem" +pid +".jpg";
        HttpHeaders header=new HttpHeaders();
        Path filePath;
        try{
            filePath= Paths.get(path);
            header.setContentType(MediaType.IMAGE_JPEG);
            byte[] imageBytes = Files.readAllBytes(filePath);
            return new ResponseEntity<>(imageBytes, header, HttpStatus.OK);
        }catch (IOException e){
            e.printStackTrace();
            return null;
        }
    }

    public MultiValueMap<String, ResponseEntity<byte[]>> getImageByCategory(String category) throws UnsupportedEncodingException {
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

    public List<Problem> getInfoByCategory(String category) throws UnsupportedEncodingException {
        String decodedString = URLDecoder.decode(category, StandardCharsets.UTF_8.toString());
        return problemRepository.findCategory(category);
    }

    public String createProblemFile(MultipartFile file1, MultipartFile file2) throws IOException, InterruptedException {
        Problem p= problemRepository.findFirstByOrderByIdDesc();
        int idx=0;
        if(pid==0){
            pid=p.getId()+1L;
        }

        String filePath1 = IMAGE_DIR + "problem" + pid + ".jpg";
        String filePath2 = IMAGE_DIR + "solution" + pid + ".jpg";

        File newFile1=convertMultiPartToFile(file1,"problem");
        File newFile2=convertMultiPartToFile(file2,"solution");

        pid++;

        //uploadFile(newFile1, newFile2,null,"plagiarize"); // 앞에 List<String> plagList 각자 문제 문자열 배열 이걸로 받기

        //DB에 있는 해당 문제 표절 수준 업데이트 및, DB SimilarList에 추가하기
        Thread.sleep(10000);

        List<String> stringList = new ArrayList<>(Arrays.asList("매우 낮음", "매우 낮음", "보통","보통", "매우 낮음","보통","매우 낮음","매우 낮음","낮음","매우 낮음","낮음","매우 낮음"));
        p=problemRepository.findFirstByOrderByIdDesc();
        for(int i=0;i<stringList.size();i++){
            ProblemSimilarListForm dto=new ProblemSimilarListForm(p.getId(),(long)i+1,null,stringList.get(i));
            ProblemSimilarList problemEntity=dto.toEntity();
            problemSimilarityListRepository.save(problemEntity);
        }
        //제일 표절도 높은거 갱신하기
        String plagLevel= findFlagLevel(stringList);
        p.setPlaglevel(plagLevel);
        problemRepository.save(p);
        log.info(plagLevel);


        String category = p.getCategory();
        List<Problem> similarProblems = problemRepository.findCategory(category);
        if(!similarProblems.isEmpty()) {
            similarProblems.remove(similarProblems.size() - 1);
        }

        //uploadFile(newFile1, newFile2, similarProblems,"similarity"); //앞에 List<String> similarList (Type 이라는 매개변수 추가 필요해보임)
        Thread.sleep(10000);
        //비슷한거 리스트
        List<String> similarLevel=new ArrayList<>(Arrays.asList("높음","매우 높음"));

        for(Problem problem : similarProblems){
            ProblemSimilarList problemSimilarList = problemSimilarityListRepository.findById(new ProblemSimilarityListPK(p.getId(),problem.getId())).orElse(null);
            problemSimilarList.setSimilarity(similarLevel.get(idx));
            problemSimilarityListRepository.save(problemSimilarList);
            idx++;
        }
        return null;
    }

    public String findFlagLevel(List<String> stringList){
        int flagLevel=0;
        for(int i=0; i<stringList.size();i++){
            if(stringList.get(i).equals("매우 높음")){
                flagLevel=5;
            }
            else if(stringList.get(i).equals("높음") && flagLevel<=4){
                flagLevel=4;
            }
            else if(stringList.get(i).equals("보통") && flagLevel<=3){
                flagLevel=3;
            }
            else if(stringList.get(i).equals("낮음") && flagLevel<=2){
                flagLevel=2;
            }
            else if(stringList.get(i).equals("매우 낮음") && flagLevel<=1){
                flagLevel=1;
            }
        }
        switch (flagLevel){
            case 1:
                return "매우 낮음";
            case 2:
                return "낮음";
            case 3:
                return "보통";
            case 4:
                return "높음";
            case 5:
                return "매우 높음";
        }
        return null;
    }

    public String uploadFile(File File1, File File2, List<Problem> problems, String type) throws IOException {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        List<File> problemFiles = new ArrayList<>();
        List<File> solutionFiles = new ArrayList<>();
        List<FileSystemResource> problemsResource = new ArrayList<>();
        List<FileSystemResource> solutionResource = new ArrayList<>();

        if(type.equals("plagiarize")) {
            for (int i = 0; ; i++) {
                problemFiles.add(new File(IMAGE_DIR + "problem" + (i + 1) + ".jpg"));
                solutionFiles.add(new File(IMAGE_DIR + "solution" + (i + 1) + ".jpg"));
                if (!problemFiles.get(i).exists()) {
                    break;
                }
                problemsResource.add(new FileSystemResource(problemFiles.get(i)));
                solutionResource.add(new FileSystemResource(solutionFiles.get(i)));
            }
        }
        else if(type.equals("similarity")){
            for(Problem problem : problems){
                problemFiles.add(new File(IMAGE_DIR + "problem" + problem.getId() + ".jpg"));
                solutionFiles.add(new File(IMAGE_DIR + "solution" + problem.getId() + ".jpg"));
            }
            for(File f:problemFiles){
                problemsResource.add(new FileSystemResource(f));
            }
            for(File f:solutionFiles){
                solutionResource.add(new FileSystemResource(f));
            }
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

