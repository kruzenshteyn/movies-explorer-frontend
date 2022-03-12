import './Register.css';
import React, {useEffect} from 'react';

import AuthPage from '../AuthPage/AuthPage';

import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Register(props){

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e){
    e.preventDefault();
    props.onSignUp(values);
  }

  useEffect(()=>{
    props.resetApiError();
  },[]);

  useEffect(() => {
    resetForm();
  }, []);

  return(
    <AuthPage title= 'Добро пожаловать!' btnTitle='Зарегистрироваться' 
        text='Уже зарегистрированы? ' linkText='Войти' link='/signin' handleSubmit={handleSubmit}
        isValid={isValid}>
      <div className='register'>
        <div className='authPage__fields'>
          <p className='authPage__label'>Имя</p>
          <input type="text" className="authPage__input" value={values.name || ''} 
            required minLength="2" maxLength="40" name="name" onChange={handleChange}
            placeholder="Имя" />
            <span className="authPage__error" id="authPage-error">{errors['name']}</span>
        </div>
        <div className='authPage__fields'>
          <p className='authPage__label'>E-mail</p>
          <input type="email" className="authPage__input" value={values.email || ''} 
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            required minLength="2" maxLength="40" name="email" onChange={handleChange}
            placeholder="pochta@yandex.ru" />
          <span className="authPage__error" id="authPage-error">{errors['email']}</span>
        </div>
        <div className='authPage__fields'>
          <p className='authPage__label'>Пароль</p>
          <input type="password" className="authPage__input" value={values.password || ''} 
            required minLength="5" maxLength="40" name="password" onChange={handleChange}
            placeholder="Пароль" />
          <span className="authPage__error" id="authPage-error">{errors['password']}</span>
        </div>        
        <span className="authPage__error" id="authPage-error">{props.apiError}</span>
      </div>      
    </AuthPage>
  )
}

export default Register;