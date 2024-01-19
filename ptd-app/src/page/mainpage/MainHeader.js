import UploadProblemButton from '../../asset/components/UploadProblemButton';
import SignOutButton from '../../asset/components/SignOutButton';
import UserName from '../../asset/components/UserName';

function MainHeader() {
    
    return(
        <div>
            <UploadProblemButton/><br/>
            <SignOutButton/>
            <UserName/><br/>
        </div>
    )
}

export default MainHeader;