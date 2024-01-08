import pro_1 from '../image/pro_1.PNG';
import './ProblemArticle.css'

function ProblemArticle() {
    return (
        <article>
            <div class='img-container'>
                <img className='pro_1' src={pro_1} alt='pro'></img>
            </div>
        </article>
    )
}

export default ProblemArticle;