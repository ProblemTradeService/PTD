import BackButton from '../../asset/components/BackButton';
import HeaderBar from '../../asset/components/HeaderBar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCategory } from '../../store/dataSlice';


function UploadHeader() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const backButtonHandler = () => {
        dispatch(clearCategory());
        navigate('/');
    }

    return (
        <div>
            <HeaderBar/>
            <BackButton backButtonHandler={backButtonHandler}/>
        </div>
    )
}

export default UploadHeader;