import './Profile.css';
import React from 'react';
import Header from '../Header/Header';

function Profile(props){
  const title = 'Виталий';
  const [values, setValues] = React.useState({email:'test@test.ru', name:'test'});

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
    <div className="profile">
      <Header />
      <main>
        <h2 className="profile__title">Привет, {title}!</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className='profile__field'>
            <p className='profile__label'>Имя</p>
            <input type="text" className="profile__input" id="name" placeholder="Имя"
              value={values.name || ''} onChange={handleChange}
              required minLength="2" maxLength="200" name="Name"/>
          </div>        
          <div className='profile__field'>
            <p className='profile__label'>E-mail</p>
            <input type="text" className="profile__input" id="email" placeholder="Email"
            value={values.email || ''} onChange={handleChange}
              required minLength="2" maxLength="40" name="email"/>
          </div>
          <button type="submit"  className="profile__button profile__button_type_edit">Редактировать</button>
          <button type="button"  className="profile__button profile__button_type_logout">Выйти из аккаунта</button>
        </form>
      </main>
    </div>    
  );
}

export default Profile;