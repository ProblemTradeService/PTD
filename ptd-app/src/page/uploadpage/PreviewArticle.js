import pro_13 from "../../asset/components/image/pro_13.PNG";
import './PreviewArticle.css'


function PreviewArticle() {

    return (
        <article>
        <div class="previewContainer">
        
        <div class='previewImg-container'>
            <img className='pro_13' src={pro_13} alt='pro'></img>
        </div>

        </div>
        </article>
    )
}

export default PreviewArticle;