import React, {useEffect, useState} from 'react';
import axios from 'axios';



function InputImageP(){

    const [result, setResult] = useState(null)
    const [files,setFiles] = useState(null);
    const [pid,setPid] = useState(0);
    const onLoadFile = (e) =>{
        const file=e.target.files;
        setFiles(file);
    };

    const handleClick = (e)=>{
        const formdata = new FormData();
        for(var i=0;i<files.length;i++){
        formdata.append("file",files[i]);
        }

        axios.post("/api/problems/image",formdata, {headers: {"Content-Type": "multipart/form-data"}})
        .then(response => setResult(response.data))
        .catch(error => console.log(error))

    };

    const onImageValue = (e) =>{
        console.log(e.target.value);
        console.log(result);
        setPid(e.target.value);
    }

    // const imageClick = (e)=>{
    //     const data={"pid": null};
    //     data.pid=parseInt(pid);
    //     console.log(data);
    //     axios.get("/api/problems/category/"+pid, {
    //         responseType: 'blob', // binary data로 설정
    //       })
    //     .then(response => setResult(URL.createObjectURL(response.data)))
    //     .catch(error => console.log(error))
    //     console.log(result)
    // }

    function ImageList(props){
        const src="http://localhost:7030/api/problems/category/"+props.id
        return(
            <div>
                <img src={src} alt="미리보기"></img>
            </div>
        );
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
                {/* <button class="btn btn-primary" onClick={imageClick}>사진보기</button> */}
                <ImageList id={8}></ImageList>
            </div>
            <img src={result} alt="미리보기"></img>
     </form>
    );
}

export default InputImageP