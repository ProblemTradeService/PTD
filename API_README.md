## 📑 API 구조
### 1. Member 관련
<hr>

### 모든 멤버 조회
모든 Member에 대한 정보를 조회한다. 
<br>

Method, URL 
```
Method : GET
URL : "/api/members"
```

Response Body
```
[
    memberEntity1,
    memberEntity2,
    memberEntity3,
    memberEntity4,
    ...
    ...
]
```

<br>

### 특정 멤버 조회
특정 id를 가진 Member에 대한 정보를 조회한다. 
<br>

Method, URL 
```
Method : GET
URL : "/api/members/{id}"
```

Response Body
```
{
    "id" : 1,
    "email" : "sadsd@naver.com",
    "password" : "sager2r2raf",
    "username" : "핑퐁",
    "money" : 0
}
```

<br>

### 멤버 가입
본 서비스에서 멤버로 등록할 수 있다.
<br>

Method, URL 
```
Method : POST
URL : "/api/members"
```

Request Body
```
{
    "email" : "sadsd@naver.com",
    "password" : "sager2r2raf",
    "username" : "핑퐁",
    "money" : 0
}
```

Response Body
```
{
    "id" : 1,
    "email" : "sadsd@naver.com",
    "password" : "sager2r2raf",
    "username" : "핑퐁",
    "money" : 0
}
```

<br>

### 2. 수학 문제 관련
<hr>


### 모든 수학 문제 정보 가져오기
모든든 수학 문제에 대한 정보를 가져올 수 있다.
<br>

Method, URL 
```
Method : GET
URL : "/api/problems"
```

Response Body
```
[
    {
        "id" : 4,
        "level" : 3,
        "price" : 50000,
        "owner" : "핑퐁",
        "category" : "수열의 극한",
        "plaglevel" : "높음",
        "status" : "판매중"
    },
    {
        "id" : 5,
        "level" : 2,
        "price" : 30000,
        "owner" : "퐁퐁",
        "category" : "수열의 극한",
        "plaglevel" : "낮음",
        "status" : "판매중"
    },
    ...
    ...
]
```

<br>

### 특정 수학 문제 정보 가져오기
특정한 수학 문제에 대한 정보를 가져올 수 있다.
<br>

Method, URL 
```
Method : GET
URL : "/api/problems/info/pid/{pid}"
```

Response Body
```
{
    "id" : 4,
    "level" : 3,
    "price" : 50000,
    "owner" : "핑퐁",
    "category" : "수열의 극한",
    "plaglevel" : "높음",
    "status" : "판매중"
}
```

<br>

### 특정 수학 문제 이미지 가져오기
특정한 수학 문제에 대한 이미지를 가져올 수 있다.
<br>

Method, URL 
```
Method : GET
URL : "/api/problems/image/pid/{pid}"
```

Response Body
```
{Byte[] Content}
```

<br>

### 카테고리별 수학 문제 정보 가져오기
카테고리별 수학 문제에 대한 정보를 가져올 수 있다.
<br>

Method, URL 
```
Method : GET
URL : "/api/problems/info/category/{category}"
```

Response Body
```
[
    {
        "id" : 4,
        "level" : 3,
        "price" : 50000,
        "owner" : "핑퐁",
        "category" : "수열의 극한",
        "plaglevel" : "높음",
        "status" : "판매중"
    },
    {
        "id" : 5,
        "level" : 2,
        "price" : 30000,
        "owner" : "퐁퐁",
        "category" : "수열의 극한",
        "plaglevel" : "낮음",
        "status" : "판매중"
    },
    ...
    ...
]
```

<br>


### 카테고리별 수학 문제 이미지 가져오기
카테고리별 수학 문제에 대한 이미지를 가져올 수 있다.
<br>

Method, URL 
```
Method : GET
URL : "/api/problems/image/category/{category}"
```

Response Body
```
{
    "image": imagebyte1,imagebyte2, .....
}
```

<br>


### 사용자의 문제를 상태별로 가지고 오기
특정 사용자의 문제를 판매중, 판매완료와 같은 상태별로 가지고 올 수 있다.
<br>

Method, URL 
```
Method : GET
URL : "/api/problems/my/{owner}/{status}"
```

Response Body
```
[
    {
        "id" : 4,
        "level" : 3,
        "price" : 50000,
        "owner" : "핑퐁",
        "category" : "수열의 극한",
        "plaglevel" : "높음",
        "status" : "판매중"
    },
    {
        "id" : 9,
        "level" : 4,
        "price" : 30000,
        "owner" : "핑퐁",
        "category" : "함수의 극한",
        "plaglevel" : "높음",
        "status" : "판매중"
    },
    ...
    ...
]
```

<br>

### 문제 업로드
사용자가 문제에 대한 정보를 업로드 할 수 있다.
<br>

Method, URL 
```
Method : POST
URL : "/api/problems"
```

Request Body
```
{
    "level" : 3,
    "price" : 50000,
    "owner" : "핑퐁",
    "category" : "수열의 극한",
    "status" : "판매중"
}
```

Response Body
```
{
    "id" : 4
    "level" : 3,
    "price" : 50000,
    "owner" : "핑퐁",
    "category" : "수열의 극한",
    "status" : "판매중"
}
```

<br>


### 문제 표절도 수준 측정
문제에 대한 표절도를 측정할 수 있다.
<br>

Method, URL 
```
Method : POST
URL : "/plagiarize"
```

Request Body
```
{
   "problem" : UploadFile
   "solvingProcess" : UploadFile
   "problems" : List[UploadFile]
   "solvingProcess" : List[UploadFile]
}
```

Response Body
```
[
    "매우 높음",
    "높음",
    "매우 높음",
    "낮음",
    ...
    ...
]
```

<br>


### 문제 유사도 수준 측정
문제에 대한 유사도를 측정할 수 있다.
<br>

Method, URL 
```
Method : POST
URL : "/similarity"
```

Request Body
```
{
   "problem" : UploadFile
   "solvingProcess" : UploadFile
   "problems" : List[UploadFile]
   "solvingProcess" : List[UploadFile]
}
```

Response Body
```
[
    "매우 높음",
    "높음",
    "매우 높음",
    "낮음",
    ...
    ...
]
```

<br>




