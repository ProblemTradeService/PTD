## 📑 API 구조
### 1. Member 관련
<hr>

### 모든 멤버 조회
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

### 멤버 가입
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
