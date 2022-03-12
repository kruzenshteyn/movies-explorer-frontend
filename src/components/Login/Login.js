import './Login.css';
import React from 'react';

import AuthPage from '../AuthPage/AuthPage';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Login(props){

  //const [values, setValues] = React.useState({email:'pochta@yandex.ru', password:'password'});

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e){
    e.preventDefault();    
    props.onSignIn(values);
  }

  /* const handleChange = (e) => {
    const { name, value } = e.target;
    const isValid = e.target.checkValidity();    
    if (e.target.validity.patternMismatch) {
      e.target.setCustomValidity('Введите в формате pochta@yandex.ru');
    } else {
      e.target.setCustomValidity('');
    }
    if (!isValid) {
      e.target.reportValidity();
    }
    setValues(_ => ({
      ...values,
      [name]: value,
    }))
  } */

  return(
    <AuthPage title= 'Добро пожаловать!' btnTitle='Войти' 
        text='Ещё не зарегистрированы? ' linkText='Зарегистрироваться' 
        link='/signup' handleSubmit={handleSubmit}>
      <div className='login'>        
        <div className='authPage__fields'>
          <p className='authPage__label'>E-mail</p>
          <input type="email" className="authPage__input" value={values.email || ''} 
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            required minLength="2" maxLength="40" name="email" onChange={handleChange}
            />          
        </div>
        <div className='authPage__fields'>
          <p className='authPage__label'>Пароль</p>
          <input type="password" className="authPage__input" value={values.password || ''} 
            required minLength="5" maxLength="40" name="password" onChange={handleChange}/>          
        </div>        
        <span className="authPage__error" id="authPage-error">Что-то пошло не так...</span>
      </div>      
    </AuthPage>
  )
}

export default Login;