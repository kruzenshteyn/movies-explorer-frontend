import './Header.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Header(props) {

  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt='Лого' className="header__logo"></img>
      </NavLink>
      <div className='header__links'>
        <NavLink className='header__link' activeClassName='header__link_active' to="/movies">Фильмы</NavLink>
        <NavLink className='header__link' activeClassName='header__link_active' to="/saved-movies">Сохранённые фильмы</NavLink>        
      </div>      
      <NavLink className='header__button' to="/profile">Аккаунт</NavLink>
    </header>
  );
}

export default Header;