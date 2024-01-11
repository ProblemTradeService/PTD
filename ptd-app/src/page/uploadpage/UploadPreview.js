import PreviewArticle from "./PreviewArticle";
import UploadHeader from "./UploadHeader";

function UploadPreview() {
    
    const previewTitle ={
        textAlign: 'center',
        fontSize: '60px',
        color: 'black'
    }
    
    return (
        <>
            <UploadHeader/>
            <h1 style={previewTitle}>Upload Preview</h1>
            <PreviewArticle/>
        </>
    )
}
export default UploadPreview;