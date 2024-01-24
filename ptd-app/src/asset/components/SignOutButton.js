function SignOutButton() {
    
    const signButtonStyle = {
        width: '80px',
        height: '22px',
        textAlign: 'center',
        fontWeight: '600',
        backgroundColor: 'var(--Primary, #7C14FD)',
        borderRadius: '1000px',
        border: '1px solid var(--Primary, #7C14FD)',
        color: 'white',
        fontSize: '13px',
    }  
    
    const signposition ={
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        right: '80px',
        bottom: '20%'
    };

    return (
        <div style={signposition}>
        <button id='signout' style={signButtonStyle}>SignOut</button>
        </div>
    )
}

export default SignOutButton;