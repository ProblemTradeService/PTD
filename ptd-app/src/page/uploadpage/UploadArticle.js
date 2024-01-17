import CategorySelector from '../../asset/components/CategorySelector';
import { useSelector, useDispatch } from 'react-redux';
import { clearCategory } from '../../store/dataSlice';
import { postProblem } from '../../api/api_functions'
import { useNavigate } from "react-router-dom";
import './UploadArticle.css'

export function NextButton() {

    return (
        <div className="button-container">
            <input type="submit" value="UPLOAD"></input>
            <input type="reset" value="CANCEL"></input>
        </div>
    );
}

function UploadForm() {

    return (
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
                <li>
                    <div className="answerUpload">
                    <label htmlFor="answerUpload">정답 업로드</label>
                    <input type="file" name="answerImage" accept="image/*"></input>
                    </div>
                </li>
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
    )
}

function UploadArticle() {
    const dispatch = useDispatch();
    const category = useSelector(state=>state.data.category);
    const navigate = useNavigate();

    const uploadTitle ={
        textAlign: 'center',
        fontSize: '60px',
        color: 'black'
    }

    // 모든 값이 입력되었는지 확인
    const isAllFieldsFilled = (target) => {
        let allFieldsFilled = true;


        Array.from(target.elements).forEach(element => {
            // 요소가 file 타입 input인지 확인
            if (element.type === 'file') {
                // file input에 파일이 선택되지 않았다면
                if (!element.files.length) {
                    allFieldsFilled = false;
                }
            }
        });
        if((Object.keys(category[3]).length === 0) || !target.price.value || !target.diff.value){
            allFieldsFilled = false;
        }


        if (!allFieldsFilled) {
          alert("모든 필드가 채워지지 않았습니다.");
          return false
        }
        return true
    }

    const submit = (event) => {
        event.preventDefault();

        if(!isAllFieldsFilled(event.target)) return;
        
        postProblem(event.target);

        navigate('/');
    }

    return (
        <article>
            <form onSubmit={submit}onReset={()=>dispatch(clearCategory())}>
                <UploadForm/>
                <NextButton/>
            </form>
            <h1 style={uploadTitle}>Upload Problem</h1>
        </article>
    )
}

export default UploadArticle;