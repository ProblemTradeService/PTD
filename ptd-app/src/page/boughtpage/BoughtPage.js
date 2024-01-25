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
            
            <div style={{ marginTop: '-5%' }}><ProblemDetail problem={prob} /></div>
            {/* <NextCancelButton submitText={'목록으로'} onClickHandler={onClickHandler} /> */}
            <div style ={{ textAlign: 'center', }}>
            <button onClick={onClickHandler} onClickHandler={onClickHandler}
            style={{width: '200px', height: '60px', fontSize: '25px', fontWeight: 'bold',
            color: 'white', fontFamily: 'HK Grotesk', textAlign: 'center', backgroundColor: '#7C14FD',
            borderRadius: '25px', boxShadow: '0px 26px 46px 0px rgba(124, 20, 253, 0.35)',
            border: '1px solid #7C14FD'}}>
                목록으로</button></div>
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
        })
    },[]);
    useEffect(()=>{
        setGridContent(problems);
    },[problems]);

    return(
        <>
        <HeaderBar/>
        <Link to="/main"><BackButton/></Link>
        <div className="backGround"></div>

        <div class="rectangle">
        <div class="purplerec">

            <div class="plist">구매목록</div>
            <div class="smallrec"></div>
            
            {content}
        </div>
        </div>
            
        
        </>
    )
}

export default BoughtPage;