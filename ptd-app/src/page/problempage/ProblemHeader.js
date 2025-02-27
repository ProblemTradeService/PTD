import BackButton from '../../asset/components/BackButton';
import HeaderBar from '../../asset/components/HeaderBar';
import { useNavigate } from 'react-router-dom';

function ProblemHeader() {

    const navigate = useNavigate();

    const backButtonHandler = () => {
        navigate('/explore');
    }

    return (
        <div>
            <HeaderBar/>
            <BackButton backButtonHandler={backButtonHandler}></BackButton>
        </div>
    )
}

export default ProblemHeader;