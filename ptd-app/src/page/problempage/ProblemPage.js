import ProblemHeader from "./ProblemHeader";
import ProblemDetail from "./ProblemDetail";
import PreviewGrid from "../../asset/components/PreviewGrid"
import NextCancelButton from "../../asset/components/NextCancelButton";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProblem, getSimilarProblems } from "../../api/GetAPI";
import { postUserDeal } from "../../api/PostAPI";
import "../../asset/components/background.css"

function ProblemPage() {
    const location = useLocation();
    const pathname = location.pathname;
    const pid = pathname.substring(pathname.lastIndexOf('/') + 1);
    const navigate = useNavigate();
    const userName = useSelector(state=>state.data.userName);
    const [problem, setProblem] = useState(null);
    const [similarProblems, setSimilarProblems] = useState([]);

    const onPreviewClickHandler = (pid) => {
        navigate('/explore/problem/'+pid);
    }

    const onPurchaseButtonHandler = () => {
        postUserDeal(userName, problem.id)
            .then(response=>{
                if(response) {
                    alert("구매가 완료되었습니다.");
                    navigate('/explore');
                }
            })
    }

    useEffect(()=>{
        getProblem(pid).then((data)=>setProblem(data));
        getSimilarProblems(pid).then((data)=>setSimilarProblems(data));
    },[location])



    if(!problem) return
    return (
        <div className="backGround">
            <ProblemHeader/>
            <ProblemDetail problem={problem}/>
            <NextCancelButton submitText={'구매하기'} onClickHandler={onPurchaseButtonHandler}/>
            <PreviewGrid problems={similarProblems} onPreviewClick={onPreviewClickHandler}/>
        </div>
    )
}
export default ProblemPage;