import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import AuthPage from '../AuthPage/AuthPage';


/* import Main from '../Main/Main';
import HeaderMain from '../Main/HeaderMain/HeaderMain'; */

//import NotFoundPage from '../NotFoundPage/NotFoundPage';
/* 
<HeaderMain />
      <Main /> */

function App() {
  return (
    <div className="App">      
      <AuthPage title= 'Добро пожаловать!' btnTitle='Зарегистрироваться' 
        text='Уже зарегистрированы?' linkText='Войти' >
          Form
      </AuthPage>
    </div>
  );
}

export default App;
