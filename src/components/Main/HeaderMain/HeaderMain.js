import './HeaderMain.css';
import logo from '../../../images/logo.png';

//<Link className="popup__link" to="/sign-in">Войти</Link>

function HeaderMain(props) {

  return (
    <header className="headerMain">
      <img src={logo} alt='Лого' className="headerMain__logo"></img>
      <div className='headerMain__auth'>
        <a href='#' className='headerMain__link'>Регистрация</a>
        <button className='headerMain__button'>Войти</button>
      </div>
    </header>
  );
}

export default HeaderMain;