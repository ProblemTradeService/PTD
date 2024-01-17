import { useDispatch, useSelector } from 'react-redux';
import { clearCategory } from '../../store/dataSlice'
import { useNavigate } from "react-router-dom";

function UploadProblemButton() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const upButtonStyle = {
        position: 'fixed',
        width: '100px',
        height: '80px',
        fontSize: '22px',
        fontWeight: 'bold',
        left: '15px',
        top: '15px',
        backgroundColor: 'white',
        border: 'solid 1.5px',
        borderColor: '#3AAF46',
        borderRadius: '10px'
      };

    const showUploadPage = () => {
        dispatch(clearCategory())
        navigate("/upload")
    }

    return (
        <button id="uploadButton"style={upButtonStyle}onClick={showUploadPage}
        >Upload<br/>Problem</button>
    )
}

export default UploadProblemButton;