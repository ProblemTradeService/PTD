import { useEffect, useState } from "react";
import { getProblem } from "../../api/GetAPI";


function UploadConfirm(props) {
    const [problemInfo, setProblemInfo] = useState(null);
    const [problemImage, setProblemImage] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    let pid = 13

    useEffect(()=>{
        getProblem(props.pid).then(setProblem);
    },[])

    const setProblem = (data) => {
        setProblemInfo(data.info);
        setProblemImage(data.image);
    }


    //if(problemInfo === null || problemImage === null) return;
    return (
    <>
        <h1>업로드 확인</h1>
        {/* <div>
            <h3>{problemInfo.id}</h3>
            <h3>{problemInfo.category}</h3>
            <h3>{problemInfo.level}</h3>
            <h3>{problemInfo.owner}</h3>
            <h3>{problemInfo.plaglevel}</h3>
            {problemInfo.price}            
        </div> */}
    </>
    )
}

export default UploadConfirm;