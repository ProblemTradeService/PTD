import { UploadProblemButton } from "../mainpage/MainHeader";
import { SignOutButton } from "../mainpage/MainHeader";
import { UserName } from "../mainpage/MainHeader";

function ExploreHeader() {
    
    return (
        <div>
            <UploadProblemButton></UploadProblemButton> <br/>
            <SignOutButton></SignOutButton>
            <UserName></UserName><br/>
        </div>
    )
}

export default ExploreHeader;