import { useEffect, useState } from "react";
import { getProblem } from "../../api/GetAPI";
import ProblemDetail from "../problempage/ProblemDetail";
import NextCancelButton from "../../asset/components/NextCancelButton";


function UploadConfirm(props) {
    
    const [problem, setProblem] = useState(null);

    useEffect(()=>{
        getProblem(props.pid).then((data)=>setProblem(data));
    },[])


    if(!problem) return
    return (
    <>
        <ProblemDetail problem={problem}/>
        <NextCancelButton submitText={'확인'}/>
    </>
    )
}

export default UploadConfirm;