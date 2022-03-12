import './Login.css';
import React, { useEffect } from 'react';

import AuthPage from '../AuthPage/AuthPage';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Login(props){

  useEffect(()=>{
    props.resetApiError();
  },[]);

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e){
    e.preventDefault();    
    props.onSignIn(values);
  }

  return(
    <AuthPage title= 'Добро пожаловать!' btnTitle='Войти' 
        text='Ещё не зарегистрированы? ' linkText='Зарегистрироваться' 
        link='/signup' handleSubmit={handleSubmit}
        isValid={isValid}>
      <div className='login'>        
        <div className='authPage__fields'>
          <p className='authPage__label'>E-mail</p>
          <input type="email" className="authPage__input" value={values.email || ''} 
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            required minLength="2" maxLength="40" name="email" onChange={handleChange}
            /> 
          <span className="authPage__error" id="authPage-error">{errors['email']}</span>
        </div>
        <div className='authPage__fields'>
          <p className='authPage__label'>Пароль</p>
          <input type="password" className="authPage__input" value={values.password || ''} 
            required minLength="5" maxLength="40" name="password" onChange={handleChange}/>
          <span className="authPage__error" id="authPage-error">{errors['password']}</span>          
        </div>        
        <span className="authPage__error" id="authPage-error">{props.apiError}</span>
      </div>      
    </AuthPage>
  )
}

export default Login;