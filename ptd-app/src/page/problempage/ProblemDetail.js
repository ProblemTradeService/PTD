import './ProblemDetail.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
import PlagiarismModal from '../../asset/components/PlagiarismModal';

function ProblemDetail({problem}) {
    const [modalShow, setModalShow] = useState(false);

    const handleOpen = () => setModalShow(true);
    const handleClose = () => setModalShow(false);

    const buttonSx = {
        ml:2,
        mb:2,
        backgroundColor:'#b428b4',
        color: 'white',
        '&:hover': {
          backgroundColor: '#e65ae6',
        },
    }

    return (
        <>
        <div className="proarticle">
            <div className="container">
            <div className='img-container'>
                <img className='proImg' src={problem.image} alt='pro'></img>
            </div>

            <div className='data-container'>
            <ul id="problemDetail">
                <li>
                    <label htmlFor="similarityLevel" class="similarityLevel">표절 수준 : </label>
                    <label className="similarityLevel" id="simLevel">{problem.plaglevel}</label>
                    <Button variant="contained" sx={buttonSx} onClick={handleOpen}>상세보기</Button>
                </li>
                <li>
                    <label htmlFor="problemCategory">카테고리 : </label>
                    <label>{problem.category}</label> 
                </li> 
                <li>
                    <label htmlFor="seller">판매자 : </label>
                    <label>{problem.owner}</label> 
                </li>
                <li>
                    <label htmlFor="uploadDate">등록일자 : </label>
                    <label>2022년 10월 21일</label> 
                </li>
                <li>
                    <label htmlFor="difficulty">난이도 : </label>
                    <label>{problem.level}</label> 
                </li>
                <li>
                    <label htmlFor="Price">가격 : </label>
                    <label>{problem.price}</label>
                    <label> ETH</label>
                </li>
            </ul>
            </div>
            </div>
        </div>
        <PlagiarismModal open={modalShow} setOpen={handleClose} pid={problem.id}/> 
        </>
    )
}

export default ProblemDetail;