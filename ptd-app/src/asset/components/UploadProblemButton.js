import { Link } from "react-router-dom";

function UploadProblemButton() {

    const upButtonStyle = {
        position: 'relative',
        width: '100px',
        height: '80px',
        fontSize: '25px',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'HK Grotesk',
  
        textAlign: 'center',
        backgroundColor: '#7C14FD',
        borderRadius: '25px',
        boxShadow: '0px 26px 46px 0px rgba(124, 20, 253, 0.35)',

        left: '20px',
        top: '20px',
      };

    return (
        <Link to="/upload">
            <button id="uploadButton"style={upButtonStyle}>문제 구매하기 {'>'}</button>
        </Link>
    )
}

export default UploadProblemButton;