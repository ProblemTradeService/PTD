import { useEffect, useState } from "react";
import { getUserBalance } from "../../api/GetAPI";
import { useSelector } from "react-redux";
import SignOutButton from "./SignOutButton";
import UserName from "./UserName";

function HeaderBar () {
    const [balance, setBalance] = useState(null);
    const userName = useSelector(state=>state.data.userName);
    
    const navrecstyle = {
        width: '100%',
        height: '50px',
        background: 'white',
        boxShadow: '0px 12px 22px rgba(0, 0, 0, 0.05)',
    }

    const nav1set ={
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',
        position: 'relative', top: '10px', right: '170px',
        
    }
    
    const nav1 ={
        margin: '0 10px',
        fontFamily: "HK Grotesk",
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
        textDecoration: 'none',  
    }
    
    useEffect(() => {
        getUserBalance(userName).then(response=>setBalance(response));
    })
    
    return (
        <>
        <div style={navrecstyle}>
            <div style={nav1set}>
                <a id='home' href="/" style={nav1}>홈</a>
                <a id='explore' href="/explore" style={nav1}>구매하기</a>
                <a id='upload' href="/upload" style={nav1}>판매하기</a>
                <a id='money' style={nav1}>₩{balance}</a>
            </div>
        <SignOutButton/>
        <UserName/>
        </div>
        </>
    )
}

export default HeaderBar;