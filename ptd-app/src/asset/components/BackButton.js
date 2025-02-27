import back_button from "../../asset/image/back_button.png";

function BackButton({backButtonHandler}) {


  const backposition = {
    display: 'flex',
    position: 'relative',
    top: '-40px',
    left: '5px'
    
  }

  const BackButtonStyle = {
        backgroundColor: 'white',
        border: 'white',        
  }

  const imgStyle = {
      width: '30px',
  };

    return (
      <div style={backposition}> 
        <button style={BackButtonStyle} onClick={backButtonHandler}>
          <img src={back_button} style={imgStyle} alt="back" />
        </button>
        </div>
      );
    }

export default BackButton;