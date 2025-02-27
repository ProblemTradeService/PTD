import SearchButton from '../../asset/components/SearchButton';
import CategorySelector from '../../asset/components/CategorySelector';
import HeaderBar from '../../asset/components/HeaderBar';
import BackButton from '../../asset/components/BackButton';
import { Link } from 'react-router-dom';
import './ExploreArticle.css'

function ExploreHeader() {
    
    const exploreCategory = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '800px',
        height: '90px',
        border: '1px solid #FAF6FF',
        borderRadius: '20px',
        background: '#FAF6FF',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-35px',
        
    }

    const searchButton ={
        height: '45px',
        width: '50px',
        marginLeft: '20px',
        borderRadius: '10px',
        border: '1px solid #7C14FD',
        background: '#7C14FD',
        marginTop: '5px',
        boxShadow: 'none',
        fontWeight: 'bold',
    }

    return (
        <>
        <HeaderBar/>
        <Link to="/"><BackButton/></Link>
        <div class="exploreHeader">
            <h1 class="searchTitle">문제 검색</h1>
            <div id="category-search" style={exploreCategory}>
                <div><CategorySelector/></div>
                <SearchButton  SearchText={'찾기'} style={searchButton}/>
            </div>
        </div>
        </>
    )
}

export default ExploreHeader;