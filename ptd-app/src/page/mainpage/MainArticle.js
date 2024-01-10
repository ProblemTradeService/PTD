import SearchButton from '../../asset/components/SearchButton';
import CategorySelector from "../../asset/components/CategorySelector";

function MainArticle() {

    const h1Style = {
        textAlign: 'center',
        fontSize: '60px',
        color: 'black'
    }

    return(
        <article>
            <h1 style={h1Style}>Problem Trade Platform</h1>
            <div id="category-search">
                <CategorySelector/>
                <SearchButton/>
            </div>
            
        </article>
    )
}

export default MainArticle;