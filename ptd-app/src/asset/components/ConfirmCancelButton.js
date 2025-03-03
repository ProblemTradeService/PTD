function ConfirmCancelButton({ submitText, cancelText, onSubmitHandler, onCancelHandler}) {

    const nextCancelStyle = {
            position: 'fixed',
            fontSize: '20px',
            right: '50%',
            bottom: '4%',
            transform: 'translate(50%)',
            whiteSpace: 'nowrap', // 텍스트의 줄 바꿈 방지
            display: 'flex', // 텍스트의 길이에 맞게 요소 크기 조절
            alignItems: 'center', // 수직 중앙 정렬 추가
            
    };

    const submitStyle = {
        position: 'relative',
        width: '200px',
        height: '60px',
        marginRight: '10px',
        fontSize: '25px',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'HK Grotesk',
        textAlign: 'center',
        backgroundColor: '#7C14FD',
        borderRadius: '25px',
        boxShadow: '0px 26px 46px 0px rgba(124, 20, 253, 0.35)',
        border: '1px solid #7C14FD'
    };

    const cancelStyle = {
        position: 'relative',
        width: '200px',
        height: '60px',
        marginLeft: '10px',
        fontSize: '25px',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'HK Grotesk',
        textAlign: 'center',
        backgroundColor: '#a0a0a0',
        borderRadius: '25px',
        boxShadow: '0px 26px 46px 0px #a0a0a0',
        border: '1px solid #a0a0a0'
    };

    return (
        <div class="button-container" style={nextCancelStyle}>
            <button style={submitStyle} onClick={onSubmitHandler}>{submitText}</button>
            <button style={cancelStyle} onClick={onCancelHandler}>{cancelText}</button>
        </div>
    );
}

export default ConfirmCancelButton;