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
        backgroundColor: 'white',
        boxShadow: '0px 12px 22px rgba(0, 0, 0, 0.05)',

    }

    const nav1set = { 
        display: 'flex',
        flexDirection: 'row',justifyContent: 'flex-end', alignItems: 'center',position: 'relative',
        top: '10px'
    }
    
    const nav1 = {
        margin: '0 8px',
        fontFamily: "HK Grotesk",
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
        textDecoration: 'none', 
    }

    const nav2set = {
        marginRight: '20px'
    }
    
    useEffect(() => {
        getUserBalance(userName).then(response=>setBalance(response));
    })
    
    return (
        <>
        <div style={navrecstyle}>
            <div style={nav1set} >
                <div style={nav2set} >
                <a id='home' href="/" style={nav1}>홈</a>
                <a id='explore' href="/explore" style={nav1}>구매하기</a>
                <a id='upload' href="/upload" style={nav1}>판매하기</a>
                <a id='money' style={nav1}>₩{balance}</a>
                </div>
                <SignOutButton/>
                <UserName/>
            </div>
            
        </div>
        </>
    );
}

export default HeaderBar;