import { useSelector, useDispatch } from 'react-redux';
import { clearCategory } from '../../store/dataSlice';
import { postProblem } from '../../api/PostAPI'
import { useState } from 'react';
import UploadForm from './UploadForm';
import UploadWaiting from './UploadWaiting';
import UploadConfirm from './UploadConfirm';

const State = {
    UploadForm: 0,
    UploadWaiting: 1,
    UploadConfirm: 2
};

function UploadArticle() {
    const dispatch = useDispatch();
    const category = useSelector(state=>state.data.category);
    const [state, setState] = useState(0);
    const [pid, setPid] = useState(null);
    let content = null;

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

    // 제출 및 리셋
    const submit = (event) => {
        event.preventDefault();

        if(!isAllFieldsFilled(event.target)) return;
        
        postProblem(event.target, category).then(toConfirmState);

        setState(State.UploadWaiting);
    }
    const reset = () => {
        dispatch(clearCategory());
    }

    const toConfirmState = (pid) => {
        setPid(pid);
        setState(State.UploadConfirm)
    }

    // 상태에 따른 내용 변환
    switch(state){
        case State.UploadForm:
            content = <UploadForm submit={submit} reset={reset}/>
            break;
        case State.UploadWaiting:
            content = <UploadWaiting/>
            break;
        case State.UploadConfirm:
            content = <UploadConfirm pid = {pid}/>
    }

    return (
        <article>
            {content}
        </article>
    )
}

export default UploadArticle;