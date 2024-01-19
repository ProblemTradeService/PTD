import NextCancelButton from "../../asset/components/NextCancelButton";
import SignOutButton from "../../asset/components/SignOutButton";
import UserName from "../../asset/components/UserName";

function MyPage() {
    const h1Style = {
        textAlign: 'center',
        fontSize: '60px',
        color: 'black',
    }

    const mylistStyle ={
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        
    }

    const listStyle ={
        listStyleType: 'square',
        fontSize: '50px',
  
    }

    const liStyle = {
        marginBottom: '50px'
    }

    return(
        <div className="backGround">
            <SignOutButton></SignOutButton><br/>
            <UserName></UserName>
            <h1 style={h1Style}>My Page</h1>

            <div style={mylistStyle}>
            <ul style={listStyle}>
                <li style={liStyle}><a href="/mypage">구매 완료 문제</a></li>
                <li style={liStyle}><a href="/mypage">판매 중인 문제</a></li>
                <li style={liStyle}><a href="/mypage">판매 대기 문제</a></li>
            </ul>
            </div>
            <NextCancelButton></NextCancelButton>
        </div>
    )
}

export default MyPage;