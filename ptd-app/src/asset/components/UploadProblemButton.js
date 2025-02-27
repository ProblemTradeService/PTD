import { useDispatch, useSelector } from 'react-redux';
import { clearCategory } from '../../store/dataSlice'
import { useNavigate } from "react-router-dom";

function UploadProblemButton({UploadText, style}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const upButtonStyle = {
        position: 'relative',
        // width: '200px',
        // height: '100px',
        // fontSize: '25px',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'HK Grotesk',
        textAlign: 'center',
        backgroundColor: '#7C14FD',
        borderRadius: '25px',
        boxShadow: '0px 26px 46px 0px rgba(124, 20, 253, 0.35)',
        border: '1px solid #7C14FD'
      };

    const showUploadPage = () => {
        dispatch(clearCategory())
        navigate("/upload")
    }

    return (
        <button id="uploadButton"style={{...upButtonStyle,...style}}onClick={showUploadPage}>{UploadText}</button>
    )
}

export default UploadProblemButton;