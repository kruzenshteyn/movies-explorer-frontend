import './AuthPage.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function AuthPage(props){

  return(
    <div className='authPage' >
      <img src={logo} alt='Логотип' className='authPage__logo'></img>
      <div className="authPage__content">        
        <h3 className="authPage__title">{props.title}</h3>
        <form className="authPage__form" onSubmit={props.handleSubmit}>
          {props.children}
          <button type="submit"  className="authPage__button">
            {props.btnTitle}
          </button>
        </form>
        <p className='authPage__text'>
          {props.text}
          <Link className='authPage__text authPage__link' to={props.link}>{props.linkText}</Link>
        </p>
      </div>
    </div>
  )
}

export default AuthPage;