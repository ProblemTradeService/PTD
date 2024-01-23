import './BoughtPage.css';
import "../../asset/components/background.css"
import HeaderBar from '../../asset/components/HeaderBar';
import BackButton from '../../asset/components/BackButton';
import ProblemDetail from '../problempage/ProblemDetail';
import PreviewGrid from '../../asset/components/PreviewGrid';
import { getProblem, getUserProblems } from '../../api/GetAPI';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NextCancelButton from '../../asset/components/NextCancelButton';

function BoughtPage () {
    const [problems, setProblems] = useState([]);
    const [content, setContent] = useState(null);
    const userName = useSelector(state=>state.data.userName);

    const onPreviewClickHandler =(pid) => {
        getProblem(pid).then((prob) => {
            setContent(
            <>
            <ProblemDetail problem={prob}/>
            <NextCancelButton submitText={'목록으로'} onClickHandler={onClickHandler}/>
            </>
            )
        })
    }

    const setGridContent = (probList) => {      
        if(probList)
            setContent(<PreviewGrid problems={probList} onPreviewClick={onPreviewClickHandler}/>);
    }

    const onClickHandler = () =>{
        setGridContent(problems);
    }

    useEffect(()=>{
        getUserProblems(userName).then(data=>{
            setProblems(data);
            setGridContent(data);
        })
    },[]);

    return(
        <>
        <HeaderBar/>
        <Link to="/"><BackButton/></Link>
        <div className="backGround"></div>

        <div class="rectangle">
            
            <div class="purplerec"></div>
            <div class="plist">구매목록</div>
            <div class="smallrec"></div>
            {content}
        </div>
        </>
    )
}

export default BoughtPage;