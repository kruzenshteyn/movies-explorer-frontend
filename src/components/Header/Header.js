import './Header.css';
import logo from '../../images/logo.png';

function Header(props) {

  return (
    <header className="header">
      <img src={logo} alt='Лого' className="header__logo"></img>
      <div className='header__links'>
        <a href='#' className='header__link header__link_active'>Фильмы</a>
        <a href='#' className='header__link'>Сохранённые фильмы</a>
      </div>      
      <button type='button' className='header__button'>Аккаунт</button>
    </header>
  );
}

export default Header;