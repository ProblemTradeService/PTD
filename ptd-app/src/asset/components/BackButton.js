import back_button from "../../asset/image/back_button.png";

function BackButton(props) {

  const BackButtonStyle = {
        position: 'fixed',
        left: '5px',
        top: '8px',
        backgroundColor: 'white',
        border: 'white',        
  }

    const imgStyle = {
      float: 'left',
      width: '30px',
  };

    return (
        <button style={BackButtonStyle} onClick={props.backButtonHandler}>
          <img src={back_button} style={imgStyle} alt="back" />
        </button>
      );
    }

export default BackButton;