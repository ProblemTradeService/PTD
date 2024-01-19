import CategorySelector from '../../asset/components/CategorySelector';
import './UploadForm.css'


function NextButton() {

    return (
        <div className="button-container">
            <input type="submit" value="UPLOAD"></input>
            <input type="reset" value="CANCEL"></input>
        </div>
    );
}

function UploadForm(props) {

    const uploadTitle ={
        textAlign: 'center',
        fontSize: '60px',
        color: 'black'
    }

    return (
    <>
    <form onSubmit={props.submit} onReset={props.reset}>
    <fieldset id="uploadForm">
            <ol type="1" id="uploadProblem">
                <li>
                    <div className="categorynext">
                        <label htmlFor="category">카테고리</label>
                        <div className="condselect"><CategorySelector/></div>
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
                    <span id="ethLabel">ETH</span>
                    </div>
                </li>
            </ol>
        </fieldset>
        <NextButton/>
    </form>
    <h1 style={uploadTitle}>Upload Problem</h1>
    </>
    )
}

export default UploadForm