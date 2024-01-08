import { SignOutButton } from "../mainpage/MainHeader";
import { UserName } from "../mainpage/MainHeader";
import './UploadHeader.css'

export function BackButton() {
    return (
        <button id="back">BACK</button>
    )
    
}

function UploadHeader() {
    return (
        <div>
            <BackButton></BackButton> <br/>
            <SignOutButton></SignOutButton> <br/>
            <UserName></UserName> <br/>
            <h1>Upload Problem</h1>
        </div>
    )
}

export default UploadHeader;