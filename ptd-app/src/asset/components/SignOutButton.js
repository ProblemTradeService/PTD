function SignOutButton() {
    
    const signButtonStyle = {
        width: '100px',
        height: '80px',
        fontSize: '25px',
        fontWeight: 'bold',
        position: 'fixed',
        right: '80px',
        top: '15px',
        backgroundColor: 'white',
        border: 'solid 1px #3AAF46',
        borderRadius: '10px',
      };

    return (
        <button id='signout' style={signButtonStyle}>Sign<br/>Out</button>
    )
}

export default SignOutButton;