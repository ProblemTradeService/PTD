import UploadProblemButton from "../../asset/components/UploadProblemButton";
import SignOutButton from '../../asset/components/SignOutButton';
import UserName from '../../asset/components/UserName';
import SearchButton from '../../asset/components/SearchButton';
import CategorySelector from '../../asset/components/CategorySelector';
import './ExploreArticle.css'


function SortingSelector() {

    return (
        <ul>
            <li><a href="/explore">등록일순</a></li>
            <li><a href="/explore">난이도순</a></li>
            <li><a href="/explore">가격오름차순</a></li>
            <li><a href="/explore">가격내림차순</a></li>
        </ul>
    )
}

function ExploreHeader() {
    
    const exploreCategory = {
        marginTop: '-40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return (
        <div class="exploreHeader">
            <UploadProblemButton/> <br/>
            <SignOutButton/>
            <UserName/><br/>
            <h1 class="searchTitle">Search Problem</h1>
            <div id="category-search" style={exploreCategory}>
                <div style={{marginRight: '20px'}}><CategorySelector/></div>
                <SearchButton/>
            </div>
            <nav><SortingSelector></SortingSelector></nav>
        </div>
    )
}

export default ExploreHeader;