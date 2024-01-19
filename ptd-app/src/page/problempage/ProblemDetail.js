import pro_1 from "../../asset/image/pro_1.PNG";
import './ProblemDetail.css'

function ProblemDetail() {

    return (
        <article class="proarticle">
            <div class="container">
            <div class='img-container'>
                <img class='proImg' src={pro_1} alt='pro'></img>
            </div>

            <div class='data-container'>
            <ul id="problemDetail">
                <li>
                    <label for="similarityLevel" class="similarityLevel">표절 수준 : </label>
                    <label class="similarityLevel" id="simLevel">높음</label>
                </li>
                <li>
                    <label for="problemCategory">카테고리 : </label>
                    <label>#고등학교 #미적분 #수열의 극한 #급수</label> 
                </li> 
                <li>
                    <label for="seller">판매자 : </label>
                    <label>김철수</label> 
                </li>
                <li>
                    <label for="uploadDate">등록일자 : </label>
                    <label>2022년 10월 21일</label> 
                </li>
                <li>
                    <label for="difficulty">난이도 : </label>
                    <label>4</label> 
                </li>
                <li>
                    <label for="Price">가격 : </label>
                    <label>10</label>
                    <label> ETH</label>
                </li>
            </ul>
            </div>
            </div>
        </article>
    )
}

export default ProblemDetail;