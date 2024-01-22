import image2 from "../../asset/image/search_button.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { refresh } from "../../store/dataSlice"

function SearchButton({SearchText, style}) {
    const navigate = useNavigate();
    const category = useSelector(state=>state.data.category)
    const dispatch = useDispatch();

    const imgStyle = {
        float: 'left',
        width: '43px',
    };
  
    const searchButtonStyle = {
        position: 'relative',
        //width: '200px',//
        //height: '100px',//
        //fontSize: '25px',//
        //fontWeight: 'bold',//
        color: 'white',
        fontFamily: 'HK Grotesk',
        textAlign: 'center',
        backgroundColor: '#7C14FD',
        borderRadius: '25px',
        boxShadow: '0px 26px 46px 0px rgba(124, 20, 253, 0.35)',
        border: '1px solid #7C14FD'
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
        <button id="SearchButton" style={{...searchButtonStyle,...style}} onClick={searchProblems}>
            {SearchText}
          
        </button>
    );
  }

export default SearchButton;