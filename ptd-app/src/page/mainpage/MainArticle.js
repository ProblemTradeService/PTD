import './MainArticle.css';
import image2 from '../image/image2.png';
import { Link } from 'react-router-dom';

export function CategorySelector() {
    
    return (
        <form id="category">
            <select>
                <option value="" hidden>초/중/고</option>
                <option value="elementary">초등학교</option>
                <option value="middle">중학교</option>
                <option value="high">고등학교</option>
            </select>

            <select>
                <option value="" hidden>학년/학기</option>
                <option value="math1">공통수학1</option>
                <option value="math2">공통수학2</option>
                <option value="math3">대수</option>
                <option value="math4">미적분</option>
                <option value="math5">확률과 통계</option>
                <option value="math6">기하</option>
            </select>

            <select>
                <option value="" hidden>대단원</option>
                <option value="limit1">수열의 극한</option>
                <option value="limit2">여러가지 함수의 미분</option>
                <option value="limit3">미분법</option>
                <option value="limit4">적분법</option>
            </select>

            <select>
                <option value="" hidden>소단원</option>
                <option value="limit11">수열의 극한</option>
                <option value="limit12">급수</option>
            </select>
        </form>
    );
}

// export function SearchButton () {
//     return (
//         <button href="localhost:3000/explore" onClick="loadURL(this.href); return false">
//             <img src={image2} alt="Search" />
//         </button>
//     );
// }

export function SearchButton() {
    return (
      <Link to="/explore">
        <button>
          <img src={image2} alt="Search" />
        </button>
      </Link>
    );
  }



function MainArticle() {

    return(
        <article>
            <h1>Problem Trade Platform</h1>
            <div id="category-search">
                <CategorySelector/>
                <SearchButton/>
            </div>
            
        </article>
    )
}

export default MainArticle;