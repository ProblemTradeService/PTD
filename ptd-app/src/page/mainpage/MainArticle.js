import SearchButton from '../../asset/components/SearchButton';
import ConditionSelect from '../../asset/components/ConditionSelect';

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
                <div style={{marginRight: '20px'}}><ConditionSelect/></div>
                <SearchButton/>
            </div>
        </article>
    )
}

export default MainArticle;