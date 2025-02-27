import { useEffect, useState } from "react";
import { getProblem } from "../../api/GetAPI";
import { deleteProblem } from "../../api/PostAPI";
import ProblemDetail from "../problempage/ProblemDetail";
import ConfirmCancelButton from "../../asset/components/ConfirmCancelButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCategory } from "../../store/dataSlice";


function UploadConfirm({pid}) {
    const [problem, setProblem] = useState(null);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const cancelUpload = () => {
        deleteProblem(pid);
        dispatch(clearCategory());
        navigate('/');
    }

    const uploadProblem = () => {
        dispatch(clearCategory());
        navigate('/');
    }

    useEffect(()=>{
        getProblem(pid).then((data)=>setProblem(data));
    },[])

    if(!problem) return
    return (
    <>
        <ProblemDetail problem={problem}/>
        <ConfirmCancelButton submitText={'확인'} cancelText={'업로드 취소'}
        onSubmitHandler={uploadProblem} onCancelHandler={cancelUpload}/>
    </>
    )
}

export default UploadConfirm;