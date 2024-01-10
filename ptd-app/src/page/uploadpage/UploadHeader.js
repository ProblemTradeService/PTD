import SignOutButton from '../../asset/components/SignOutButton';
import UserName from '../../asset/components/UserName';
import BackButton from '../../asset/components/BackButton';


function UploadHeader() {
    return (
        <div>
            <BackButton/> <br/>
            <SignOutButton/> <br/>
            <UserName/> <br/>
            <h1>Upload Problem</h1>
        </div>
    )
}

export default UploadHeader;