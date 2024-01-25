function UserName() {
    
    const userNameStyle = {
    color: '#000',
    fontFamily: "HK Grotesk",
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal', 
    textDecoration: 'none', 
    };

    const userposition = {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        right: '20px',
        bottom: '68%'
    }

    return (
        <div style={userposition}>
        <a id='user' href="/mypage" style={userNameStyle}>김철수</a>
        </div>
    )
}

export default UserName;