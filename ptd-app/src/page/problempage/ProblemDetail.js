import './ProblemDetail.css'
import NextCancelButton from "../../asset/components/NextCancelButton";
import Button from '@mui/material/Button';
import { useState } from 'react';
import PlagiarismModal from '../../asset/components/PlagiarismModal';

function ProblemDetail({problem}) {
    const [modalShow, setModalShow] = useState(false);

    const handleOpen = () => setModalShow(true);
    const handleClose = () => setModalShow(false);

    const buttonSx = {
        ml:2,
        mb:1,
        backgroundColor:'#b428b4',
        color: 'white',
        '&:hover': {
          backgroundColor: '#e65ae6',
        },
    }

    return (
        <div class="proarticle">
            <div class="container">
            <div class='img-container'>
                <img class='proImg' src={problem.image} alt='pro'></img>
            </div>

            <div class='data-container'>
            <ul id="problemDetail">
                <li>
                    <label for="similarityLevel" class="similarityLevel">표절 수준 : </label>
                    <label class="similarityLevel" id="simLevel">{problem.plaglevel}</label>
                    <Button variant="contained" sx={buttonSx} onClick={handleOpen}>상세보기</Button>
                </li>
                <li>
                    <label for="problemCategory">카테고리 : </label>
                    <label>{problem.category}</label> 
                </li> 
                <li>
                    <label for="seller">판매자 : </label>
                    <label>{problem.owner}</label> 
                </li>
                <li>
                    <label for="uploadDate">등록일자 : </label>
                    <label>2022년 10월 21일</label> 
                </li>
                <li>
                    <label for="difficulty">난이도 : </label>
                    <label>{problem.level}</label> 
                </li>
                <li>
                    <label for="Price">가격 : </label>
                    <label>{problem.price}</label>
                </li>
            </ul>
            </div>
            </div>
            <PlagiarismModal open={modalShow} setOpen={handleClose} pid={problem.id}/> 
            <NextCancelButton submitText={'구매하기'} ></NextCancelButton>
        </div>
    )
}

export default ProblemDetail;