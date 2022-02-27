import './HeaderMain.css';
import logo from '../../../images/logo.svg';
import { Link } from 'react-router-dom';

//http://localhost:3000/signin
//http://localhost:3000/signup

function HeaderMain(props) {

  return (
    <header className="headerMain">
      <img src={logo} alt='Лого' className="headerMain__logo"></img>
      <div className='headerMain__auth'>
        <Link className='headerMain__link' to="/signup">Регистрация</Link>
        <Link className='headerMain__button' to="/signin">Войти</Link>
      </div>
    </header>
  );
}

export default HeaderMain;