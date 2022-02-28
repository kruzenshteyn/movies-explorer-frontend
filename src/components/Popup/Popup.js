import { NavLink } from 'react-router-dom';
import './Popup.css';

function Popup(props) {

  return (
    <div className="popup">
      <div className='popup__container'>
        <button type='button' className='popup__close' onClick={props.onClose}></button>
        <div className='popup__links'>
          <NavLink className='popup__link ' to="/">Главная</NavLink>
          <NavLink className='popup__link popup__link_active' to="/movies">Фильмы</NavLink>
          <NavLink className='popup__link ' to="/saved-movies">Сохранённые фильмы</NavLink>
        </div>      
        <NavLink className='popup__button' to="/profile">Аккаунт</NavLink>
      </div>
    </div>
  );
}

export default Popup;