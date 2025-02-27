import BackButton from "../../asset/components/BackButton";
import HeaderBar from "../../asset/components/HeaderBar";
import NextCancelButton from "../../asset/components/NextCancelButton";
import { Link } from 'react-router-dom';

function MyPage() {
    const h1Style = {
        textAlign: 'center',
        fontSize: '60px',
        color: 'black',
    }

    const mylistStyle ={
        width: '750px',
        height: '55vh',
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        backgroundColor: 'white',
        border: '1px white solid',
        borderRadius: '20px',
        textAlign: 'center', // 텍스트 가운데 정렬
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: '0px 69px 114px rgba(124, 20, 253, 0.08)', 
    }

    const purplerec ={
        width: '100%',
        height: '6px',
        background: '#B070FF',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        position: 'absolute',
        top: '0%',
        left: '50%', /* 가로 중앙에 위치 */
        transform: 'translateX(-50%)',
      }

    const liStyle = {
        fontSize: '50px',
    }

    return(
        <div className="backGround">
            <HeaderBar/>
            <Link to="/"><BackButton/></Link>
            <h1 style={h1Style}>마이페이지</h1>

            <div style={mylistStyle}>
                <div style={purplerec}></div>
                <li style={liStyle}><a href="/bought" style={{textDecoration:'none'}}>구매한 문제</a></li>
            </div>
            <div><Link to="/">
                <NextCancelButton submitText="돌아가기"></NextCancelButton></Link></div>
        </div>
    )
}

export default MyPage;