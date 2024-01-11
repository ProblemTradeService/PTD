import SearchButton from '../../asset/components/SearchButton';
import './ExploreArticle.css';
import CategorySelector from "../../asset/components/CategorySelector";
import pro_1 from "../../asset/components/image/pro_1.PNG";
import pro_2 from "../../asset/components/image/pro_2.PNG";
import pro_3 from "../../asset/components/image/pro_3.PNG";
import pro_4 from "../../asset/components/image/pro_4.PNG";
import pro_5 from "../../asset/components/image/pro_5.PNG";
import pro_6 from "../../asset/components/image/pro_6.PNG";
import pro_7 from "../../asset/components/image/pro_7.PNG";
import pro_8 from "../../asset/components/image/pro_8.PNG";
import pro_9 from "../../asset/components/image/pro_9.PNG";
import pro_10 from "../../asset/components/image/pro_10.PNG";
import { Link } from "react-router-dom";



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
            <div class="problems"> <Link to='/problem'><img src={pro_1} alt="prob"></img></Link> </div>
            <div class="problems"> <Link to='/problem'><img src={pro_2} alt="prob"></img></Link> </div>
            <div class="problems"> <img src={pro_3} alt="prob"/> </div>
            <div class="problems"> <img src={pro_4} alt="prob"/> </div>
            <div class="problems"> <img src={pro_5} alt="prob"/> </div>
            <div class="problems"> <img src={pro_6} alt="prob"/> </div>
            <div class="problems"> <img src={pro_7} alt="prob"/> </div>
            <div class="problems"> <img src={pro_8} alt="prob"/> </div>
            <div class="problems"> <img src={pro_9} alt="prob"/> </div>
            <div class="problems"> <img src={pro_10} alt="prob"/> </div>
            
        </div>
    );
  }
  
    


function ExploreArticle() {
    const exploreCategory = {
        marginTop: '-40px'
    }
    return (
        <article>
            <h1 class="searchTitle">Search Problem</h1>
            <div id="category-search" style={exploreCategory}>
                <CategorySelector></CategorySelector>
                <SearchButton></SearchButton>
            </div>
            <div class="Whereyouare">현재 위치 : 고등학교 {'>'} 미적분 {'>'} 수열의극한 {'>'} 급수</div>
            <nav><SortingSelector></SortingSelector></nav>
            <ProblemList></ProblemList> <br/>
        </article>
    )
}

export default ExploreArticle;