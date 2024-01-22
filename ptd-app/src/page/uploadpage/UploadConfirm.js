import { useEffect, useState } from "react";
import { getProblem } from "../../api/GetAPI";
import ProblemDetail from "../problempage/ProblemDetail";


function UploadConfirm(props) {
    const [problemInfo, setProblemInfo] = useState(null);
    const [problemImage, setProblemImage] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    useEffect(()=>{
        getProblem(props.pid).then(setProblem);
    },[])

    console.log(problemImage);

    const setProblem = (data) => {
        setProblemInfo(data.info);
        setProblemImage(data.image)
    }


    if(problemInfo === null || problemImage === null) return;
    return (
    <>
        <ProblemDetail/>
        
        <div>
            <img src={problemImage} style={{height:"30vh"}}/>
            <h3>{problemInfo.id}</h3>
            <h3>{problemInfo.category}</h3>
            <h3>{problemInfo.level}</h3>
            <h3>{problemInfo.owner}</h3>
            <h3>{problemInfo.plaglevel}</h3>
            {problemInfo.price}            
        </div>
    </>
    )
}

export default UploadConfirm;