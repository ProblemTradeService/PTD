import { BackButton } from "../uploadpage/UploadHeader";
import { SignOutButton } from "../mainpage/MainHeader";
import { UserName } from "../mainpage/MainHeader";


function ProblemHeader() {
    return (
        <div>
            <BackButton></BackButton> <br/>
            <SignOutButton></SignOutButton> <br/>
            <UserName></UserName> <br/>
            <h1>Problem #1325</h1>
        </div>
    )
}

export default ProblemHeader;