import back_button from "../../asset/image/back_button.png";

function BackButton(props) {

  const BackButtonStyle = {
        position: 'fixed',
        width: '60px',
        height: '60px',
        left: '15px',
        top: '15px',
        backgroundColor: 'white',
        border: 'solid 1px #3AAF46',
        borderRadius: '10px'
  }

    const imgStyle = {
      float: 'left',
      width: '50px',
  };

    return (
        <button style={BackButtonStyle} onClick={props.backButtonHandler}>
          <img src={back_button} style={imgStyle} alt="back" />
        </button>
      );
    }

export default BackButton;