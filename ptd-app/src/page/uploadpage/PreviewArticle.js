import pro_13 from "../../asset/components/image/pro_13.PNG";
import './PreviewArticle.css'
import sol_7 from "../../asset/components/image/solution_7.PNG";
import ans_7 from "../../asset/components/image/answer_7.PNG";

function PreviewArticle() {

    return (
        <article>
            <div id="previewWrapper">
                <div id="box" class="problemBox">
                    <div class="problemText">문제</div>
                    <img className='prosize' src={pro_13} alt='pro'></img>
                </div>

                <div id="box" class="answerBox">
                    <div class="answerText">정답</div>
                    <img className='prosize' src={ans_7} alt='ans'></img>
                </div>
                    
                <div id="box" class="solutionBox">
                    <div class="solutionText">풀이</div>
                    <img className='prosize' src={sol_7} alt='sol'></img>
                </div>
            </div>
        <div class="previewContainer">
        
        {/* <div class='previewImg-container'>
            <img className='pro_13' src={pro_13} alt='pro'></img>
        </div> */}

        </div>
        </article>
    )
}

export default PreviewArticle;