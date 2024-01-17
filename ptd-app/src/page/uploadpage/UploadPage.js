import UploadArticle from "./UploadArticle";
import UploadHeader from "./UploadHeader";
import "../../asset/components/background.css"

function UploadPage() {
    
    return(
        <div className="backGround">
            <UploadHeader/>
            <UploadArticle/>
        </div>
    )
}

export default UploadPage;