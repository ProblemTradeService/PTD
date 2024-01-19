import image2 from "../../asset/image/search_button.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { refresh } from "../../store/dataSlice"

function SearchButton() {
    const navigate = useNavigate();
    const category = useSelector(state=>state.data.category)
    const dispatch = useDispatch();

    const imgStyle = {
        float: 'left',
        width: '43px',
    };
  
    const searchButtonStyle = {
        border: 'none',
        backgroundColor: 'white',
    };

    const searchProblems = () => {
        if(Object.keys(category[3]).length === 0) {
            alert("모든 범위를 선택해 주세요.");
            return;
        }
        navigate('/explore')
        dispatch(refresh())
    }

    return (
        <button id="SearchButton" style={searchButtonStyle} onClick={searchProblems}>
          <img src={image2} style={imgStyle} alt="Search" />
        </button>
    );
  }

export default SearchButton;