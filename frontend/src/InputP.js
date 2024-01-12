import React, {useEffect, useState} from 'react';
import axios from 'axios';

function InputP(){
    const [hello, setHello] = useState('Hi')
    const data={"level": 0 , "price": 0, "owner": "", "category": ""}
    const [result, setResult] = useState({"level": 0, "price": 0, "owner": "", "category": ""})

    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            data.level=event.target.level.value
            data.price=event.target.price.value
            data.owner=event.target.owner.value
            data.category=event.target.category.value
            axios.post("/api/problems",data, {header: {"content-type": "application/json"}})
            .then(response => setResult(response.data))
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
            
            <button type="submit" class="btn btn-primary">Submit</button>
            <a href="/articles">Back</a>
            <p>{result['owner']}</p>
        </form>
    )
}

export default InputP