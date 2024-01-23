import ProblemHeader from "./ProblemHeader";
import ProblemDetail from "./ProblemDetail";
import PreviewGrid from "../../asset/components/PreviewGrid"
import NextCancelButton from "../../asset/components/NextCancelButton";
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getProblem, getSimilarProblems } from "../../api/GetAPI";
import "../../asset/components/background.css"

function ProblemPage() {
    const location = useLocation();
    const pathname = location.pathname;
    const pid = pathname.substring(pathname.lastIndexOf('/') + 1);
    const navigate = useNavigate();
    const [problem, setProblem] = useState(null);
    const [similarProblems, setSimilarProblems] = useState([]);

    const onPreviewClickHandler = (pid) => {
        navigate('/explore/problem/'+pid);
    }

    useEffect(()=>{
        getProblem(pid).then((data)=>setProblem(data));
        getSimilarProblems(pid).then((data)=>setSimilarProblems(data));
    },[location])




      const previewGridStyle = {
        display: 'flex',
        flexDirection: 'column',
        

      };

 
    if(!problem) return
    return (
        
        <div className="backGround">
        <ProblemHeader/>
            <div style={previewGridStyle}></div>
            <div><ProblemDetail problem={problem} /></div>
            <div ><PreviewGrid problems={similarProblems} onPreviewClick={onPreviewClickHandler} /></div>
        
        <div><NextCancelButton submitText={'구매하기'}></NextCancelButton></div>
        </div>
        
    )
}
export default ProblemPage;