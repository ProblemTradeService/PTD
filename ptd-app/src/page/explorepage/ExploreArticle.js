import { CategorySelector, SearchButton } from "../mainpage/MainArticle";
import './ExploreArticle.css';
import '../mainpage/MainArticle.css';
import pro_1 from "../image/pro_1.PNG";

function SortingSelector() {

    return (
        <ul>
            <li><a href="/explore">추천순</a></li>
            <li><a href="/explore">난이도순</a></li>
            <li><a href="/explore">등록일순</a></li>
            <li><a href="/explore">가격오름차순</a></li>
            <li><a href="/explore">가격내림차순</a></li>
        </ul>
    )
}

function ProblemList() {
    return(
        <div class="wrapper">
            <div class="problems"> <img src={pro_1} alt="pro"/> </div>
            <div class="problems"> <img src='image\pro_2.png' alt="pro"/> </div>
            <div class="problems"> <img src='image\pro_3.png' alt="pro"/> </div>
            <div class="problems"> <img src='image\pro_4.png' alt="pro"/> </div>
        </div>
    );
  }
  
    


function ExploreArticle() {

    return (
        <article>
            <h1>Search Problem</h1>
            <div id="category-search">
                <CategorySelector></CategorySelector>
                <SearchButton></SearchButton>
            </div>
            <nav><SortingSelector></SortingSelector></nav>
            <ProblemList></ProblemList> <br/>
        </article>
    )
}

export default ExploreArticle;