function SignOutButton() {
    
    const signButtonStyle = {
        width: '80px',
        height: '22px',
        textAlign: 'center',
        fontWeight: '600',
        position: 'fixed',
        right: '90px',
        top: '13px',
        backgroundColor: 'var(--Primary, #7C14FD)',
        borderRadius: '1000px',
        border: '1px solid var(--Primary, #7C14FD)',
        color: 'white',
        fontSize: '13px',
        
 
        
         
      };

    return (
        <button id='signout' style={signButtonStyle}>SignOut</button>
    )
}

export default SignOutButton;