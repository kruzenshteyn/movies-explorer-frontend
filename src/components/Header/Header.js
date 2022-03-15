import './Header.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Header(props) {

  console.log(props.loggedIn);

  const [isPopupOpen, setPopupOpen] = useState(false);

  function handlePopupOpen(){
    setPopupOpen(true);
  }

  function handleCloseClick(e){
    setPopupOpen(false);
  }

  return (    
      <header className={`header ${props.loggedIn ? '' : 'header_notauth'}`}>
        <NavLink to="/">
          <img src={logo} alt='Лого' className="header__logo"></img>
        </NavLink>
        {
          props.loggedIn ? (
            <>
              <div className='header__links'>
                <NavLink className='header__link' activeClassName='header__link_active' to="/movies">Фильмы</NavLink>
                <NavLink className='header__link' activeClassName='header__link_active' to="/saved-movies">Сохранённые фильмы</NavLink>        
              </div>      
              <NavLink className='header__button' to="/profile">Аккаунт</NavLink>
              <button type='button' className='header__menu' onClick={handlePopupOpen}></button>
              <Popup isOpen={isPopupOpen} onClose={handleCloseClick} />
            </>
          ):
          (
            <div className='header__auth'>
              <Link className='header__auth-link' to="/signup">Регистрация</Link>
              <Link className='header__auth-button' to="/signin">Войти</Link>
            </div>
          )
        }
      </header>
  );
}

export default Header;