function UserName() {
    
    const userNameStyle = {
    position: 'fixed',
    right: '10px',
    top: '30px',
    fontSize: '20px',  
    };

    return (
        <a id='user' href="/" style={userNameStyle}>김철수</a>
    )
}

export default UserName;