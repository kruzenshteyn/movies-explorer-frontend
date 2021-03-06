import './Profile.css';
import React from 'react';
import Header from '../Header/Header';

import { useFormWithValidation } from '../../utils/useFormWithValidation';
import { CurrentUserContext  } from '../../contexts/CurrentUserContext';

function Profile(props){
  
  const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();

  const currentUser = React.useContext(CurrentUserContext);
  
  const [isCorrectValues, setIsCorrectValues] = React.useState(false);

  React.useEffect(()=>{
    props.resetApiError();    
  },[]);

  React.useEffect(()=>{
    setValues(currentUser);
    // Отключении кнопки при изменении данных пользователя
    setIsCorrectValues(false);
  }, [currentUser]);

  React.useEffect(() => {
    if(isValid){
      setIsCorrectValues(values['email'] === currentUser.email ? false : true);
    }
  }, [isValid, values['email']])

  function handleSubmit(e){
    e.preventDefault();
    props.onSubmit({name: values['name'], email: values['email']});
  }

  function handleSignOut(e){
    e.preventDefault();
    props.onSignOut();
  }
  
  return(    
    <div className="profile">
      <Header loggedIn={props.loggedIn}/>
      <main>
        <h2 className="profile__title">Привет, {props.user.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className='profile__field'>
            <p className='profile__label'>Имя</p>
            <input type="text" className="profile__input" id="name" placeholder="Имя"
              value={values.name || ''} onChange={handleChange}
              required minLength="2" maxLength="200" name="name"/>
          </div> 
          <span className="profile__error">{errors['name']}</span>
          <div className='profile__field'>
            <p className='profile__label'>E-mail</p>
            <input type="email" className="profile__input" id="email" placeholder="Email"
              value={values.email || ''} onChange={handleChange}
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              required minLength="2" maxLength="40" name="email"/>
          </div>
          <span className="profile__error">{errors['email']}</span>
          {
            props.apiError ? (
              <span className="profile__error">{props.apiError}</span>
            ) : (
              <></>
            )
          }
          <button type="submit"  className="profile__button profile__button_type_edit" disabled={!isCorrectValues}>Редактировать</button>
          <button type="button"  className="profile__button profile__button_type_logout" onClick={handleSignOut}>Выйти из аккаунта</button>
        </form>
      </main>
    </div>    
  );
}

export default Profile;