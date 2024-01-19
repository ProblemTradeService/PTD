function NextCancelButton({ submitText, resetText }) {

const nextCancelStyle = {
        position: 'fixed',
        fontSize: '20px',
        right: '50%',
        bottom: '4%',
        transform: 'translate(50%)',
        whiteSpace: 'nowrap', // 텍스트의 줄 바꿈 방지
        display: 'flex', // 텍스트의 길이에 맞게 요소 크기 조절
        alignItems: 'center', // 수직 중앙 정렬 추가
        gap: '8px',
};

const submitStyle = {
    backgroundColor: '#3AAF46',
    color: 'white',
    width: '200px',
    height: '60px',
    marginRight: '20px',
    border: 'solid 1px #3AAF46',
    fontSize: 'large',
    borderRadius: '10%',
};

const resetStyle ={
    backgroundColor: 'white',
    color: 'black',
    width: '200px',
    height: '60px',
    border: 'solid 1px #3AAF46',
    fontSize: 'large',
    borderRadius: '10%',
}
    return (
        <div class="button-container" style={nextCancelStyle}>
            <input type="submit" style={submitStyle} value={submitText}></input>
            <input type="reset" style={resetStyle} value={resetText}></input>
        </div>
    );
}

export default NextCancelButton;