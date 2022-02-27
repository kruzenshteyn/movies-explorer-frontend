import './Login.css';
import React from 'react';

import AuthPage from '../AuthPage/AuthPage';

function Login(props){

  const [values, setValues] = React.useState({name:'Виталий', email:'pochta@yandex.ru', password:'test'});

  return(
    <AuthPage title= 'Добро пожаловать!' btnTitle='Зарегистрироваться' 
        text='Уже зарегистрированы? ' linkText='Войти' >
      <div className='login'>        
        <div className='authPage__fields'>
          <p className='authPage__label'>E-mail</p>
          <input type="text" className="authPage__input" value={values.email || ''} 
            required minLength="2" maxLength="40" name="email"/>          
        </div>
        <div className='authPage__fields'>
          <p className='authPage__label'>Пароль</p>
          <input type="password" className="authPage__input" value={values.password || ''} 
            required minLength="5" maxLength="40" name="password"/>          
        </div>        
        <span className="authPage__error" id="authPage-error">Что-то пошло не так...</span>
      </div>      
    </AuthPage>
  )
}

export default Login;