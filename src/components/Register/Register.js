import './Register.css';
import React from 'react';

import AuthPage from '../AuthPage/AuthPage';

function Login(props){

  const [values, setValues] = React.useState({name:'Виталий', email:'pochta@yandex.ru', password:'test'});

  function handleSubmit(e){
    e.preventDefault();
    console.log('Функция в процессе разработки');
    alert('Функция в процессе разработки');
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(_ => ({
      ...values,
      [name]: value,
    }))
  }

  return(
    <AuthPage title= 'Добро пожаловать!' btnTitle='Зарегистрироваться' 
        text='Уже зарегистрированы? ' linkText='Войти' link='/signin' handleSubmit={handleSubmit}>
      <div className='login'>
        <div className='authPage__fields'>
          <p className='authPage__label'>Имя</p>
          <input type="text" className="authPage__input" value={values.name || ''} 
            required minLength="2" maxLength="40" name="name" onChange={handleChange}/>          
        </div>
        <div className='authPage__fields'>
          <p className='authPage__label'>E-mail</p>
          <input type="text" className="authPage__input" value={values.email || ''} 
            required minLength="2" maxLength="40" name="email" onChange={handleChange}/>          
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