import CategorySelector2 from '../../asset/components/CategorySelector2';
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
            <ol type="1" id="uploadProblem">
                <li>
                    <div class="categorynext">
                    <label for="category">카테고리</label>
                    <CategorySelector2/>
                    </div>
                </li>
                <li>
                    <div class="problemUpload">
                    <label for="problemUpload">문제 업로드</label>
                    <input type="file" name="file"></input>
                    </div>
                </li>
                <li>
                    <div class="answerUpload">
                    <label for="answerUpload">정답 업로드</label>
                    <input type="file" name="file"></input>
                    </div>
                </li>
                <li>
                    <div class="explanationUpload">
                    <label for="explanationUpload">해설 업로드</label>
                    <input type="file" name="file"></input>
                    </div>
                </li>
                <li>
                    <div class="diff">
                    <label for="difficulty">난이도</label>
                    <select id="diff">
                        <option value="diff_1" >1</option>
                        <option value="diff_2" >2</option>
                        <option value="diff_3" >3</option>
                        <option value="diff_4" >4</option>
                        <option value="diff_5" >5</option>
                    </select>
                    </div>
                </li>
                <li>
                    <div class="Priceinput">
                    <label for="Price">가격</label>
                    <input type="number" id="Priceinput"></input>
                    <span id="ethLabel">ETH</span>
                    </div>
                </li>
            </ol>
        </fieldset>
    )
}

function UploadArticle() {

    return (
        <article>
            <div><UploadForm></UploadForm></div>
            <div><NextButton></NextButton></div>
        </article>
    )
}

export default UploadArticle;