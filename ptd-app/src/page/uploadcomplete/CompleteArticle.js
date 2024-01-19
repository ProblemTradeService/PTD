import completelogo from "../../asset/components/image/completelogo.png";
import NextCancelButton from "../../asset/components/NextCancelButton";

function CompleteArticle() {

    const uploadTitle = {
        textAlign: 'center',
        fontSize: '60px',
        color: 'black'
    }

    const completeWord = {
        fontWeight: 'bold',
        fontSize: '22px',
        textAlign: 'center',
    }

    const logoStyle ={
        width: '150px',
        height: '150px',
    }

    return (
        <article>
            <h1 style={uploadTitle}>Upload Complete</h1>
            <div style={{ textAlign: 'center' }}>
                <img src={completelogo} style={logoStyle} alt="complete"/>
            </div>
            <div style={completeWord}>
                <br/><br/>
                성공적으로 업로드 되었습니다.<br/><br/>
                내부적으로 표절 검사 진행 후<br/><br/>
                마이페이지에서 업로드한 문제 확인가능합니다.<br/><br/>
                (최소 5분 ~ 최대 1일 소요예정)
            </div>
            <div><NextCancelButton submitText={'마이페이지로 가기'} resetText={'처음 화면으로 돌아가기'}></NextCancelButton></div>
        </article>
    )
}

export default CompleteArticle;