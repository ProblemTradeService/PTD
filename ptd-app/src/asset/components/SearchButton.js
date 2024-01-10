import image2 from "../../asset/components/image/image2.png";
import { Link } from 'react-router-dom';

function SearchButton() {

    
    const imgStyle = {
        float: 'left',
        width: '43px',
    };
  
    const searchButtonStyle = {
        border: 'none',
        backgroundColor: 'white',
    };

    return (
      <Link to="/explore">
        <button id="SearchButton" style={searchButtonStyle}>
          <img src={image2} style={imgStyle}alt="Search" />
        </button>
      </Link>
    );
  }

export default SearchButton;