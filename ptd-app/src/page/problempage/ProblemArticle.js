import pro_10 from "../../asset/components/image/pro_10.PNG";
import pro_1 from "../../asset/components/image/pro_1.PNG";
import pro_13 from "../../asset/components/image/pro_13.PNG";
import pro_2 from "../../asset/components/image/pro_2.PNG";
import './ProblemArticle.css'


function ProblemArticle() {

/* 문제가 가로로 길면 네모칸 가로에 자동 맞추도록 하고
    문제가 세로로 길면 네모칸 세로에 자동 맞추도록 한다*/ 

            // const imgContainer = document.querySelector('.img-container');
            // const pro1 = document.querySelector('.pro_1');
      
            // if (imgContainer && pro1) {
            //   const containerAspectRatio = imgContainer.offsetWidth / imgContainer.offsetHeight;
            //   const pro1AspectRatio = pro1.offsetWidth / pro1.offsetHeight;
      
            //   if ( containerAspectRatio > pro1AspectRatio ) {
            //     pro1.style.width = '100%';
            //     pro1.style.height = 'auto';
            //   } else {
            //     pro1.style.width = 'auto';
            //     pro1.style.height = '100%';
            //   }
            // }

    return (
        <article>
            <div class="container">
            <div class='img-container'>
                <img className='proImg' src={pro_13} alt='pro'></img>
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

export default ProblemArticle;