import SignOutButton from '../../asset/components/SignOutButton';
import UserName from '../../asset/components/UserName';
import BackButton from '../../asset/components/BackButton';
import { useNavigate } from 'react-router-dom';


function ProblemHeader() {

    const problemTitle = {
        textAlign: 'center',
        fontSize: '60px',
        color: 'black',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: 1000,
    }

    const navigate = useNavigate();

    const backButtonHandler = () => {
        navigate('/explore');
    }

    return (
        <div>
            <BackButton backButtonHandler={backButtonHandler}></BackButton>
            <SignOutButton></SignOutButton>
            <UserName></UserName>
        </div>
    )
}

export default ProblemHeader;