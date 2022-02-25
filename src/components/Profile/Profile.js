import './Profile.css';
import React from 'react';

function Profile(props){
  const title = 'Виталий';
  const [values, setValues] = React.useState({email:'test@test.ru', name:'test'});

  return(
    <div className="profile">
      <h2 className="profile__title">Привет, {title}!</h2>
      <form className="profile__form" >
        <div className='profile__field'>
          <p className='profile__label'>Имя</p>
          <input type="text" className="profile__input" id="name" placeholder="Имя"
            value={values.name || ''} 
            required minLength="2" maxLength="200" name="Name"/>
        </div>        
        <div className='profile__field'>
          <p className='profile__label'>E-mail</p>
          <input type="text" className="profile__input" id="email" placeholder="Email"
          value={values.email || ''} 
            required minLength="2" maxLength="40" name="email"/>
        </div>
        <button type="submit"  className="profile__button profile__button_type_edit">Редактировать</button>
        <button type="button"  className="profile__button profile__button_type_logout">Выйти из аккаунта</button>
      </form>
    </div>
  );
}

export default Profile;