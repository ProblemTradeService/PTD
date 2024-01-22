function UserName() {
    
    const userNameStyle = {
    position: 'fixed',
    right: '30px',
    top: '10px',
    color: '#000',
    fontFamily: "HK Grotesk",
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal', 
    textDecoration: 'none', 
    };

    return (
        <a id='user' href="/mypage" style={userNameStyle}>김철수</a>
    )
}

export default UserName;