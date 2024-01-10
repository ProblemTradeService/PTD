import './CategorySelector.css'

// category1 = ['초등학교', '중학교', '고등학교']
// category2 = ['수학1', '수학2', '미적분', '기하', '확률과통계']
// category2_1 = ['지수와로그', '지수함수와로그함수', '삼각함수','수열']
// category2_1_1 = ['지수','로그']
// category2_1_2 = ['지수함수', '로그함수']
// category2_1_3 = ['삼각함수', '삼각함수의그래프','삼각함수의활용']
// category2_1_4 = ['등차수열', '등비수열', '수열의합','수학적 귀납법']
// category2_2 = ['함수의극한과연속','다항함수의미분법','다항함수의적분법']
// category2_2_1 = ['함수의극한','함수의연속']
// category2_2_2 = ['미분계수와 도함수','도함수의 활용(1)','도함수의 활용(2)','도함수의 활용(3)']
// category2_2_3 = ['부정적분','정적분', '정적분의 활용]
// category2_3 = ['수열의 극한', '미분법', '적분법']
// category2_3_1 = ['수열의 극한', '급수']
// category2_3_2 = ['지수함수와 로그함수의 미분','삼각함수의 미분','여러 가지 미분법','도함수의 활용 ⑴','도함수의 활용 ⑵']
// category2_3_3 = ['여러 가지 적분법', '정적분', '정적분의 활용']
// category2_4 = ['이차곡선','벡터','공간도형']
// category2_4_1 = ['이차곡선','이차곡선과 직선']
// category2_4_2 = ['벡터의 연산','평면벡터의 성분','평면벡터의 내적']
// category2_4_3 = ['공간도형','공간좌표']
// category2_5 = ['순열과 조합', '확률', '통계']
// category2_5_1 = ['여러가지순열','중복조합과 이항정리']
// category2_5_2 = ['확률의 뜻과 활용','조건부확률']
// category2_5_1 = ['확률변수와확률분포','이항분포와정규분포']



function CategorySelector() {
    return (
        <form id="category">
            <select class="category">
                <option value="" hidden>초/중/고</option>
                <option value="elementary">초등학교</option>
                <option value="middle">중학교</option>
                <option value="high">고등학교</option>
            </select>

            <select class="category">
                <option value="" hidden>학년/학기</option>
                <option value="math1">공통수학1</option>
                <option value="math2">공통수학2</option>
                <option value="math3">대수</option>
                <option value="math4">미적분</option>
                <option value="math5">확률과 통계</option>
                <option value="math6">기하</option>
            </select>

            <select class="category">
                <option value="" hidden>대단원</option>
                <option value="limit1">수열의 극한</option>
                <option value="limit2">여러가지 함수의 미분</option>
                <option value="limit3">미분법</option>
                <option value="limit4">적분법</option>
            </select>

            <select class="category">
                <option value="" hidden>소단원</option>
                <option value="limit11">수열의 극한</option>
                <option value="limit12">급수</option>
            </select>
        </form>
    );
}

export default CategorySelector;