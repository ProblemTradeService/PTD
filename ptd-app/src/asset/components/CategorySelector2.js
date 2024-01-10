function CategorySelector2() {
    
    const categoryform = {
        textAlign: 'center',
        float: 'left',
        marginRight: '20px',
    }
    
    const category = {
        width: '150px',
        height: '40px',
        textAlign: 'center',
        fontSize: '20px',
        marginBottom: '5px',
        
    }

    return (
        <form id="categoryform" style={categoryform}>
            <select class="category" style={category}>
                <option value="" hidden>초/중/고</option>
                <option value="elementary">초등학교</option>
                <option value="middle">중학교</option>
                <option value="high">고등학교</option>
            </select>

            <select class="category" style={category}>
                <option value="" hidden>학년/학기</option>
                <option value="math1">공통수학1</option>
                <option value="math2">공통수학2</option>
                <option value="math3">대수</option>
                <option value="math4">미적분</option>
                <option value="math5">확률과 통계</option>
                <option value="math6">기하</option>
            </select>

            <select class="category" style={category}>
                <option value="" hidden>대단원</option>
                <option value="limit1">수열의 극한</option>
                <option value="limit2">여러가지 함수의 미분</option>
                <option value="limit3">미분법</option>
                <option value="limit4">적분법</option>
            </select>

            <select class="category" style={category}>
                <option value="" hidden>소단원</option>
                <option value="limit11">수열의 극한</option>
                <option value="limit12">급수</option>
            </select>
        </form>
    );
}

export default CategorySelector2;