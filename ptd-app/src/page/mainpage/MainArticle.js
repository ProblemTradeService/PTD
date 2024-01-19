import SearchButton from '../../asset/components/SearchButton';
import CategorySelector from '../../asset/components/CategorySelector';

function MainArticle() {

    const h1Style = {
        textAlign: 'center',
        fontSize: '60px',
        color: 'black',
    }

    const catStyle ={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return(
        <article>
            <h1 style={h1Style}>Problem Trade Platform</h1>
            <div id="category-search" style={catStyle}>
                <div style={{marginRight: '20px'}}><CategorySelector/></div>
                <SearchButton/>
            </div>
        </article>
    )
}

export default MainArticle;