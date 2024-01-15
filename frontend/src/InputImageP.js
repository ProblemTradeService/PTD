import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Info(props){
    let t=props.problem
    console.log(t)

    return(
        <div>
           <li>{t["id"]} {t["level"]} {t["price"]} {t["owner"]} {t["category"]}</li>
        </div>
    )
}

function InputImageP(){
    const [infoResult, setInfoResult]=useState({"level": null, "price": null, "owner": "", "category": ""});
    const [result, setResult] = useState(null);
    const [files,setFiles] = useState(null);
    const [pid,setPid] = useState(0);
    
    const onLoadFile = (e) =>{
        const file=e.target.files;
        setFiles(file);
        console.log(file)
    };

    const handleClick = (e)=>{
        const formdata = new FormData();
        for(var i=0;i<files.length;i++){
        formdata.append("file",files[i]);
        console.log(files[i])
        }

        axios.post("/api/problems/image",formdata, {headers: {"Content-Type": "multipart/form-data"}})
        .then(response => setResult(response.data))
        .catch(error => console.log(error))
    };

    const onPidValue = (e) =>{
        console.log(e.target.value);
        setPid(e.target.value)
    }

    const problemInfoClick = (e) =>{
        const data={"pid": null};
        data.pid=parseInt(pid);
        console.log(data);
        axios.get("/api/problems/info/"+pid)
        .then(response => setInfoResult(response.data))
        .catch(error => console.log(error))
    }

    const onImageValue = (e) =>{
        console.log(e.target.value);
        setPid(e.target.value);
    }

    const imageClick = (e)=>{
        axios.get("/api/problems/수열의 극한", {
            responseType: 'blob', // binary data로 설정
          })
        .then(response => setResult(URL.createObjectURL(response.data)))
        .catch(error => console.log(error))
    }


    return(
     <form onSubmit={(e)=>{e.preventDefault()}}class="container" action='/problems' encType="multipart/form-data">
         <div class="mb-3">
                <label class="form-label">문제 파일</label>
                <input type="file" multiple="multiple" class="form-control" name="file" onChange={onLoadFile}></input>
            </div>
            <button class="btn btn-primary" onClick={handleClick}>Submit</button>
            <div class="mb-3">
                <input type="text" class="form-control" name="id" onChange={onImageValue}></input>
                <button class="btn btn-primary" onClick={imageClick}>카테고리 별 사진보기</button>
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" name="pid" onChange={onPidValue}></input>
                <button class="btn btn-primary" onClick={problemInfoClick}>ID별 사진 정보보기</button>
            </div>
            <img src={result} alt="미리보기"></img>
            <Info problem={infoResult}></Info>
     </form>
    );
}

export default InputImageP