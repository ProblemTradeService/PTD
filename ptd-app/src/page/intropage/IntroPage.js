import intro_image from "../../asset/image/intro_image.jpg";
import HeaderBar from '../../asset/components/HeaderBar';
import "../../asset/components/background.css";
import { Link } from "react-router-dom"; 

function IntroPage () {

    const introStyle = {
        display: 'flex',
        flexDirection: 'row',
        height: '70%',
        width: '100%',
        // border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        // backgroundColor: 'rgba(124, 20, 253, 0.03)',
        overflow: 'hidden',
    }



    const letterStyle ={
        width: '30vw',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '80px',
    }
    

    const pictureStyle ={
        display: 'flex',
        width: '40vw',
        height: '80vh',
        // border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const picStyle ={
        width: '90%',
        marginRight: '40px',
        borderRadius: '20%',
        
        // backgroundColor:'white',
    }

    const StartButtonStyle ={
        position: 'relative',
        width: '200px',
        height: '60px',
        fontSize: '22px',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'HK Grotesk',
        textAlign: 'center',
        backgroundColor: '#7C14FD',
        borderRadius: '25px',
        boxShadow: '0px 26px 46px 0px rgba(124, 20, 253, 0.35)',
        border: '1px solid #7C14FD',
        marginTop: '5px',
    }

    return (
        <>
        <HeaderBar/>
        <div className="backGround">
        <div style={introStyle}>
        <div style={letterStyle}>
        <h1 style={{fontSize: '50px'}} >환영합니다!</h1>
            
        <p style={{fontSize: '20px'}}>검증된 문제들만 거래하는,<br />
            최고 수준의 문제거래 플랫폼입니다.<br/>
            도전과 학습의 시작을 함께하세요!
        </p>
        <Link to='/main'>
        <button style={StartButtonStyle} alt="main">시작하기</button>
        </Link>
        </div>
        <div style={pictureStyle}>
            <img src={intro_image} style={picStyle} alt="intro" />
        </div>
        </div>
        </div>
        </>
    )
}

export default IntroPage;