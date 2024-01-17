import ConditionSelect from '../../asset/components/ConditionSelect';
import './UploadArticle.css'
import NextCancelButton from '../../asset/components/NextCancelButton';

function UploadForm() {
    
    return (
        <fieldset id="uploadForm">
            <ol type="1" id="uploadProblem">
                <li>
                    <div class="categorynext">
                        <label for="category">카테고리</label>
                        <div class="condselect"><ConditionSelect/></div>
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

    const uploadTitle ={
        textAlign: 'center',
        fontSize: '60px',
        color: 'black'
    }

    return (
        <article>
            <h1 style={uploadTitle}>Upload Problem</h1>
            <div><UploadForm></UploadForm></div>
            <div><NextCancelButton submitText={'UPLOAD'} resetText={'CANCEL'}></NextCancelButton></div>
        </article>
    )
}

export default UploadArticle;