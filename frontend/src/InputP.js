import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import CheckP from './CheckP';
import { useNavigate } from 'react-router-dom';
function InputP(){
    const [hello, setHello] = useState('Hi')
    const data={"level": 0 , "price": 0, "owner": "", "category": ""}
    const [result, setResult] = useState({"level": 0, "price": 0, "owner": "", "category": ""})
    const [resultImage, setResultImage] = useState(null);
    const [problemfiles,setProblemFiles] = useState(null);
    const [solutionfiles,setSolutionFiles] = useState(null);
    const formdata = new FormData();

    const onLoadProblemFile = (e) =>{
        const file=e.target.files;
        setProblemFiles(file);
        console.log(file)
    };

    const onLoadSolutionFile = (e) =>{
        const file=e.target.files;
        setSolutionFiles(file);
        console.log(file)
    }

    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            data.level=event.target.level.value
            data.price=event.target.price.value
            data.owner=event.target.owner.value
            data.category=event.target.category.value
            formdata.append("problemFile",problemfiles[0])
            formdata.append("solutionFile",solutionfiles[0])
            
            axios.post("/api/problems",data)
            .then(response => setResult(response.data))
            .catch(error => console.log(error))

            axios.post("/api/problems/image",formdata, {headers: {"Content-Type": "multipart/form-data"}})
            .then(response => setResultImage(response.data))
            .catch(error => console.log(error))

        }}class="container" action='/problems' encType="multipart/form-data">
            <div class="mb-3">
                <label class="form-label">난이도</label>
                <input type="text" class="form-control" name="level"></input>
            </div>
            <div class="mb-3">
                <label class="form-label">가격</label>
                <input type="text" class="form-control" name="price"></input>
            </div>
            <div class="mb-3">
                <label class="form-label">소유자</label>
                <input type="text" class="form-control" name="owner"></input>
            </div>
            <div class="mb-3">
                <label class="form-label">카테고리</label>
                <input type="text" class="form-control" name="category"></input>
            </div>
            <div class="mb-3">
                <label class="form-label">문제 파일</label>
                <input type="file" multiple="multiple" class="form-control" name="file" onChange={onLoadProblemFile}></input>
            </div>
            <div class="mb-3">
                <label class="form-label">해설 파일</label>
                <input type="file" multiple="multiple" class="form-control" name="file" onChange={onLoadSolutionFile}></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <a href="/input/check">Back</a>
        </form>
    )
}

export default InputP