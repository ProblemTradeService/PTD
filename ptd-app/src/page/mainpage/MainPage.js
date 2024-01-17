import MainHeader from "./MainHeader";
import MainArticle from "./MainArticle";
import '../../asset/components/background.css';

function MainPage() {

    return(
        <div className="backGround">
            <MainHeader/>
            <MainArticle/>
        </div>
    );
}

export default MainPage;