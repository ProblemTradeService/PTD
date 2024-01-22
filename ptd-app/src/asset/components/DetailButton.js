function DetailButton () {
    const buStyle = {
        width: '60px',
        height: '30px',
        textAlign: 'center',
        fontWeight: '600',
        backgroundColor: 'var(--Primary, #7C14FD)',
        borderRadius: '1000px',
        border: '1px solid var(--Primary, #7C14FD)',
        color: 'white',
        fontSize: '13px',
    }
    
    return (
        <>
        <button style={buStyle}>자세히</button>
        </>
    )
}

export default DetailButton;