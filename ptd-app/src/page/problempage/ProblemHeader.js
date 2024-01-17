import SignOutButton from '../../asset/components/SignOutButton';
import UserName from '../../asset/components/UserName';
import BackButton from '../../asset/components/BackButton';


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

    return (
        <div>
            <BackButton></BackButton>
            <SignOutButton></SignOutButton>
            <UserName></UserName>
            <h1 style={problemTitle}>#1325 문제</h1>
        </div>
    )
}

export default ProblemHeader;