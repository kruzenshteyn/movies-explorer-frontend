import './AuthPage.css';
import logo from '../../images/logo.png';

function AuthPage(props){

  return(
    <div className='authPage' >
      <img src={logo} alt='Логотип' className='authPage__logo'></img>
      <div className="authPage__content">        
        <h3 className="authPage__title">{props.title}</h3>
        <form className="authPage__form">
          {props.children}
          <button type="submit"  className="authPage__button">
            {props.btnTitle}
          </button>
        </form>
        <p className='authPage__text'>
          {props.text}
          <a href='#' className='authPage__text authPage__link'>{props.linkText}</a>
          </p>
      </div>
    </div>
  )
}

export default AuthPage;