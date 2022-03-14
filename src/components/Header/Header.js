import './Header.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import Popup from '../Popup/Popup';
import { useState } from 'react';


function Header(props) {

  const [isPopupOpen, setPopupOpen] = useState(false);

  function handlePopupOpen(){
    setPopupOpen(true);
    console.log('popup')
  }

  function handleCloseClick(e){
    setPopupOpen(false);
  }

  return (
    <div>
      <header className="header">
        <NavLink to="/">
          <img src={logo} alt='Лого' className="header__logo"></img>
        </NavLink>
        <div className='header__links'>
          <NavLink className='header__link' activeClassName='header__link_active' to="/movies">Фильмы</NavLink>
          <NavLink className='header__link' activeClassName='header__link_active' to="/saved-movies">Сохранённые фильмы</NavLink>        
        </div>      
        <NavLink className='header__button' to="/profile">Аккаунт</NavLink>
        <button type='button' className='header__menu' onClick={handlePopupOpen}></button>
        <Popup isOpen={isPopupOpen} onClose={handleCloseClick} />
      </header>
    </div>
    
  
  );
}

export default Header;