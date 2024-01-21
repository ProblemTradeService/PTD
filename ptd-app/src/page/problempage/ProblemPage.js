import ProblemHeader from "./ProblemHeader";
import ProblemDetail from "./ProblemDetail";
import PreviewGrid from "../../asset/components/PreviewGrid"
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getProblem, getSimilarProblems } from "../../api/GetAPI";
import "../../asset/components/background.css"

function ProblemPage() {
    const location = useLocation();
    const pathname = location.pathname;
    const pid = pathname.substring(pathname.lastIndexOf('/') + 1);
    const [problem, setProblem] = useState(null);
    const [similarProblems, setSimilarProblems] = useState([]);

    useEffect(()=>{
        getProblem(pid).then((data)=>setProblem(data));
        getSimilarProblems(pid).then((data)=>setSimilarProblems(data));
    },[])

    if(!problem) return
    return (
        <div className="backGround">
            <ProblemHeader/>
            <ProblemDetail problem={problem}/>
            <PreviewGrid problems={similarProblems} onPlagModal={false}/>
        </div>
    )
}
export default ProblemPage;