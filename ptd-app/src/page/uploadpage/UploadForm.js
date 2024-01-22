import CategorySelector from '../../asset/components/CategorySelector';
import NextCancelButton from '../../asset/components/NextCancelButton';
import './UploadForm.css'

function UploadForm(props) {

    return (
    <>
    <h1 class="uploadTitle">문제 업로드</h1>
    <form onSubmit={props.submit} onReset={props.reset}>
    <fieldset id="uploadForm">
        <div class="purplerec"></div>
            <ol id="uploadProblem">
                <li>
                    <div className="categorynext">
                        <div><label htmlFor="category">카테고리</label></div>
                    <div className="catselect"><CategorySelector/></div>
                    </div>
                </li>
                <li>
                    <div className="problemUpload">
                    <label htmlFor="problemUpload">문제 업로드</label>
                    <input type="file" name="problemImage" accept="image/*"></input>
                    </div>
                </li>
                {/* <li>
                    <div className="answerUpload">
                    <label htmlFor="answerUpload">정답 업로드</label>
                    <input type="file" name="answerImage" accept="image/*"></input>
                    </div>
                </li> */}
                <li>
                    <div className="explanationUpload">
                    <label htmlFor="explanationUpload">해설 업로드</label>
                    <input type="file" name="solutionImage" accept="image/*"></input>
                    </div>
                </li>
                <li>
                    <div className="diff">
                    <label htmlFor="difficulty">난이도</label>
                    <select id="diff" name="diff">
                        <option value="1">1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                        <option value="5" >5</option>
                    </select>
                    </div>
                </li>
                <li>
                    <div className="Priceinput">
                    <label htmlFor="Price">가격</label>
                    <input type="number" id="Priceinput" name="price"></input>
                    
                    </div>
                </li>
            </ol>
        </fieldset>
        <div><NextCancelButton submitText={'UPLOAD'}></NextCancelButton></div>
    </form>
   
    </>
    )
}

export default UploadForm