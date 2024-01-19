import ProblemHeader from "./ProblemHeader";
import ProblemArticle from "./ProblemDetail";
import "../../asset/components/background.css"

function ProblemPage() {
    return (
        <div className="backGround">
            <ProblemHeader/>
            <ProblemArticle/>
        </div>
    )
}
export default ProblemPage;