import { CategorySelector } from '../mainpage/MainArticle';
import './UploadArticle.css'

export function NextButton() {

    return (
        <div class="button-container">
            <button id="next">NEXT</button>
            <button id="cancel">CANCEL</button>
        </div>
    );
}


function UploadForm() {

    return (
        <fieldset id="uploadForm">
            
            <ul id="uploadProblem">
                <li>
                    <label for="category">카테고리 </label>
                    
                </li>
                <li>
                    <label for="problemUpload">문제 업로드</label>
                </li>
                <li>
                    <label for="answerUpload">정답 업로드</label>
                </li>
                <li>
                    <label for="explanationUpload">해설 업로드</label>
                </li>
                <li>
                    <label for="difficulty">난이도</label>
                    
                    <select id="diff">
                        <option value="diff_1" >1</option>
                        <option value="diff_2" >2</option>
                        <option value="diff_3" >3</option>
                        <option value="diff_4" >4</option>
                        <option value="diff_5" >5</option>
                    </select>
                </li>
                <li>
                    <label for="Price">가격</label>
                    <input type="number" id="Priceinput"></input>
                    <span id="ethLabel">ETH</span>
                </li>
            </ul>
        </fieldset>
    )
}

function UploadArticle() {

    return (
        <article>
            <UploadForm></UploadForm>
            {/* CategorySelector<br/>
            ProblemPreview<br/>
            난이도 <br/>
            핵심개념 <br/>
            가격 <br/> */}
            <NextButton></NextButton><br/>
        </article>
    )
}

export default UploadArticle;