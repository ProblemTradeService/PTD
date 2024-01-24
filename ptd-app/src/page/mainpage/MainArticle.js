import SearchButton from '../../asset/components/SearchButton';
import CategorySelector from '../../asset/components/CategorySelector';
import UploadProblemButton from '../../asset/components/UploadProblemButton';

function MainArticle() {

    const h1Style = {
        textAlign: 'center',
        fontSize: '60px',
        color: 'black',
    }
    const catsearchrec ={
        width: '800px',
        height: '150px',
        border: '1px solid #7C14FD',
        borderRadius: '20px',
        background: '#FAF6FF',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const catposition ={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const sbposition ={
        marginTop: '-30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const searchButton ={
        width: '200px',
        height: '100px',
        fontSize: '25px',
        fontWeight: 'bold',
    }

    const upposition ={
        marginTop: '5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return(
        <article>
            <h1 style={h1Style}>메뉴 선택</h1>
            <div style={catsearchrec}>
                <div style={catposition}><CategorySelector/></div>
                
                
            </div>
            <div style={sbposition}><SearchButton SearchText={'문제 구매하기'} style={searchButton}/> </div>
            <div style={upposition}><UploadProblemButton UploadText={'문제 판매하기'} style={searchButton}/></div>
        </article>
    )
}

export default MainArticle;