import UploadProblemButton from "../../asset/components/UploadProblemButton";
import SignOutButton from '../../asset/components/SignOutButton';
import UserName from '../../asset/components/UserName';

function ExploreHeader() {
    
    return (
        <div>
            <UploadProblemButton/> <br/>
            <SignOutButton/>
            <UserName/><br/>
        </div>
    )
}

export default ExploreHeader;