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
      message = props.message === '' ? 'Успешно' : props.message;
    }
    else{
      imageSrc = imgFail;
      imageAlt = 'Не успешно';
      message = props.message ? props.message : 'Что-то пошло не так! Попробуйте ещё раз.'
    }

    return(
      <div className={`infoTooltip ${props.isOpen && 'infoTooltip_is-opened'}`} >
        <div className="infoTooltip__content">
          <button type="button" className="infoTooltip__button infoTooltip__close" onClick={props.onClose}></button>
          <img className="infoTooltip__image" src={imageSrc} alt={imageAlt} />
          <h3 className="infoTooltip__message">{message}</h3>
        </div>
      </div>
    )
}

export default InfoTooltip;