import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Info(props){
    const lis=[]
    
    for(let i=0; i<props.problem.length; i++){
        let t=props.problem[i]
        lis.push(<li>{t["id"]} {t["level"]} {t["price"]} {t["owner"]} {t["category"]}</li>)
    }
    return(
        <div>
           {lis}
        </div>
    )
}


function OutputOddP(){
    const [problem, setProblem]=useState({"level": null, "price": null, "owner": "", "category": ""})
    return(
        <div>
            <button onClick={()=>{
              axios.get("/api/problems/special")
              .then(response => setProblem(response.data))
              .catch(error => console.log(error))
            }}>문제 보기</button>
            <Info problem={problem}></Info>
        </div>
    );
}

export default OutputOddP