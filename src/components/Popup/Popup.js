import { NavLink } from 'react-router-dom';
import './Popup.css';

function Popup(props) {
  
  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <button type='button' className='popup__close' onClick={props.onClose}></button>
        <div className='popup__links'>
          <NavLink className='popup__link ' activeClassName='popup__link_active' to="/">Главная</NavLink>
          <NavLink className='popup__link ' activeClassName='popup__link_active' to="/movies">Фильмы</NavLink>
          <NavLink className='popup__link ' activeClassName='popup__link_active' to="/saved-movies">Сохранённые фильмы</NavLink>
        </div>      
        <NavLink className='popup__button' to="/profile">Аккаунт</NavLink>
      </div>
    </section>
  );
}

export default Popup;