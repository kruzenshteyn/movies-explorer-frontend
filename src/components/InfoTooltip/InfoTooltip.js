import './InfoTooltip.css';
import imgSuccess from '../../images/success.svg';
import imgFail from '../../images/fail.svg';

function InfoTooltip(props){

    let imageSrc="";
    let imageAlt="";
    let message="";

    if(props.isSuccess){
      imageSrc = imgSuccess;
      imageAlt = 'Успешно';
      message = 'Вы успешно зарегистрировались!'
    }
    else{
      imageSrc = imgFail;
      imageAlt = 'Успешно';
      message = 'Что-то пошло не так! Попробуйте ещё раз.'
    }

    return(
      <div className={`popup ${props.isOpen && 'popup_is-opened'}`} >
        <div className="popup__content">
          <button type="button" className="button popup__close" onClick={props.onClose}></button>
          <img className="popup__image" src={imageSrc} alt={imageAlt} />
          <h3 className="popup__message">{message}</h3>
        </div>
      </div>
    )
}

export default InfoTooltip;