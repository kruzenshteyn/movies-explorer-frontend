import './Popup.css';

function Popup(props) {

  return (
    <div className="popup">    
      <div className='popup__container'>
        <button type='button' className='popup__close'></button>
        <div className='popup__links'>
          <a href='#' className='popup__link '>Главная</a>
          <a href='#' className='popup__link popup__link_active'>Фильмы</a>
          <a href='#' className='popup__link '>Сохранённые фильмы</a>
        </div>      
        <button type='button' className='popup__button'>Аккаунт</button>
      </div>
    </div>
  );
}

export default Popup;