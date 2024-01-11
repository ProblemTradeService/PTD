import SignOutButton from '../../asset/components/SignOutButton';
import UserName from '../../asset/components/UserName';
import BackButton from '../../asset/components/BackButton';


function ProblemHeader() {

    const problemTitle = {
        textAlign: 'center',
        fontSize: '60px',
        color: 'black'
    }

    return (
        <div>
            <BackButton></BackButton> <br/>
            <SignOutButton></SignOutButton> <br/>
            <UserName></UserName> <br/>
            <h1 style={problemTitle}>#1325 문제</h1>
        </div>
    )
}

export default ProblemHeader;