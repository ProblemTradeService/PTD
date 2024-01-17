import ExploreHeader from "./ExploreHeader"
import ExploreArticle from "./ExploreArticle"
import "../../asset/components/background.css"

function ExplorePage() {

    return (
        <div className="backGround">
            <ExploreHeader/><br/>
            <ExploreArticle/>
        </div>
    )
}

export default ExplorePage;