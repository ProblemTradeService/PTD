import SignOutButton from '../../asset/components/SignOutButton';
import UserName from '../../asset/components/UserName';
import BackButton from '../../asset/components/BackButton';


function UploadHeader() {

    return (
        <>
            <BackButton/><br/>
            <SignOutButton/>
            <UserName/>
        </>
    )
}

export default UploadHeader;