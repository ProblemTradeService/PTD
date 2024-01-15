import React, {useEffect, useState} from 'react';
import axios from 'axios';

function CheckP(props){
    const [result,setResult] = useState(null);
        
    axios.get("/api/problems/image/"+props.data.id, {
        responseType: 'blob', // binary data로 설정
        })
    .then(response => setResult(URL.createObjectURL(response.data)))
    .catch(error => console.log(error))
    
    return(
        <div>
            <img src={result} alt="미리보기"></img>
            <br></br>
            난이도 {props.data.level}<br></br>
            가격: {props.data.price}<br></br>
            소유자: {props.data.owner} <br></br>
            카테고리: {props.data.category}<br></br>
        </div>
    );
}

export default CheckP;