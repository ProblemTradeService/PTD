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
            <table id="problemDetail">
                <tr>
                    <td class="c1" for="similarityLevel" >표절 수준 : </td>
                    <td class="c2" id="simLevel">{problem.plaglevel}
                    <Button variant="contained" sx={buttonSx} onClick={handleOpen}>상세보기</Button></td>
                </tr>
                <tr>
                    <td class="c1" for="problemCategory">카테고리 : </td>
                    <td class="c2" >{problem.category}</td> 
                </tr> 
                <tr>
                    <td class="c1" for="seller">판매자 : </td>
                    <td class="c2" >{problem.owner}</td> 
                </tr>
                <tr>
                    <td class="c1" for="uploadDate">등록일자 : </td>
                    <td class="c2" >2022년 10월 21일</td> 
                </tr>
                <tr>
                    <td class="c1" for="difficulty">난이도 : </td>
                    <td class="c2" >{problem.level}</td> 
                </tr>
                <tr>
                    <td class="c1" for="Price">가격 : </td>
                    <td class="c2" >{problem.price}</td>
                </tr>
            </table>
            </div>
            </div>
            <PlagiarismModal open={modalShow} setOpen={handleClose} pid={problem.id}/>
        </div>
    )
}

export default ProblemDetail;