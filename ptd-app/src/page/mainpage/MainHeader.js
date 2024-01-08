import './MainHeader.css'

export function UploadProblemButton() {
    
    return (
        <button id='uploadButton'>Upload<br/>Problem</button>
    )
}

export function SignOutButton() {
    
    return (
        <button id='signout'>Sign<br/>Out</button>
    )
}

export function UserName() {
    
    return (
        <a id='user' href="/">김철수</a>
    )
}

function MainHeader() {
    
    return(
        <div>
            <UploadProblemButton></UploadProblemButton><br/>
            <SignOutButton></SignOutButton>
            <UserName></UserName><br/>
        </div>
    )
}

export default MainHeader;