import back_button from "../../asset/components/image/back_button.png";

function BackButton() {

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
    

    return (
        
          <button style={BackButtonStyle}>
            <img src={back_button}  alt="back" />
          </button>
          
       
      );
    }

export default BackButton;