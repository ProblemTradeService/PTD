import SignOutButton from '../../asset/components/SignOutButton';
import UserName from '../../asset/components/UserName';
import BackButton from '../../asset/components/BackButton';
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
            <BackButton backButtonHandler={backButtonHandler}/> <br/>
            <SignOutButton/> <br/>
            <UserName/> <br/>
        </div>
    )
}

export default UploadHeader;