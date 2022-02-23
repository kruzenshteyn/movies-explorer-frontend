import './HeaderMain.css';
import logo from '../../../images/logo.png';

function HeaderMain(props) {

  return (
    <header className="headerMain">
      <img src={logo} alt='Лого' className="headerMain__logo"></img>
      <div className='headerMain__auth'>
        <div className='headerMain__link'>Регистрация</div>
        <div className='headerMain__button'>Войти</div>
      </div>
    </header>
  );
}

export default HeaderMain;