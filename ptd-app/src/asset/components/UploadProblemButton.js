import { Link } from "react-router-dom";

function UploadProblemButton() {

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

    return (
        <Link to="/upload">
            <button id="uploadButton"style={upButtonStyle}>Upload<br/>Problem</button>
        </Link>
    )
}

export default UploadProblemButton;