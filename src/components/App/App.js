import './App.css';

import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';


import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Popup from '../Popup/Popup'

import TestApi from '../TestApi/TestApi';

/* Api */
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import {getServerErrorMessage} from '../../utils/getServerErrorMessage'


/* 
  http://localhost:3000/
  http://localhost:3000/movies
  http://localhost:3000/saved-movies
  http://localhost:3000/profile
  http://localhost:3000/signin
  http://localhost:3000/signup
  http://localhost:3000/notFound
*/


function App(props) {

  //Profile
  const [currentUser, setCurrentUser] = React.useState({});

  const [authUser, setAuthUser] = React.useState({email:'', _id:'', name:'', isLoggedIn:false});

  const [apiError, setApiError] = React.useState(null);
  
  function refreshProfileData() {
    mainApi.getUserInfo()
    .then(data => {      
      setCurrentUser(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

      //Check token при загрузке
  React.useEffect(()=>{
    checkToken();
  },[]);

  function handleSignOut(){
    localStorage.removeItem('token');
    setAuthUser({email:'', _id:'', name:'', isLoggedIn:false});
    props.history.push('/');    
  }

  function checkToken(){
    const token = localStorage.getItem('token');
    
    if(token){
      mainApi.getUserInfo(token)
      .then(res=>{        
        setAuthUser({email:res.email, _id:res._id, name:res.name, isLoggedIn:true});
        props.history.push('/movies');
        refreshProfileData();
        //refreshCardData();
        setApiError(null);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    else{
      setAuthUser({email:'', _id:'', name:'', isLoggedIn:false});
    }
  }

  function handleRegister(data){
    mainApi.register(data.email, data.password, data.name)
    .then(data=>{
      //setInfoTooltipProps({isOpen:true, isSuccess:true});
      props.history.push('/signin');
      
    })
    .catch((err)=> {
      //setInfoTooltipProps({isOpen:true, isSuccess:false});
      setApiError(getServerErrorMessage(err));
      console.log(`Error = ${err}`)
    });
  }

  function handleLogin(data){
    mainApi.login(data.email, data.password)
    .then(data=>{
      localStorage.setItem('token', data.token);
      //props.history.push('/movies');
      checkToken();
    })
    .catch((err)=> {
      //setInfoTooltipProps({isOpen:true, isSuccess:false});
      setApiError(getServerErrorMessage(err));
      console.log(`Error = ${err}`)
    });
  }

  function handleEditProfile(data){
    mainApi.setUserInfo(data.name, data.email)
    .then(data=>{      
      checkToken();
    })
    .catch((err)=> {
      //setInfoTooltipProps({isOpen:true, isSuccess:false});
      setApiError(getServerErrorMessage(err));
      console.log(`Error = ${err}`)
    });
  }

  function resetApiError(){
    setApiError(null);
  }


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>        
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile user={authUser} onSignOut={handleSignOut} 
            onSubmit={handleEditProfile} apiError={apiError}
            resetApiError={resetApiError} />
        </Route>
        <Route path="/signin">
          <Login onSignIn={handleLogin} apiError={apiError} resetApiError={resetApiError}/>
        </Route>
        <Route path="/signup">
          <Register onSignUp={handleRegister} apiError={apiError} resetApiError={resetApiError}/>
        </Route>
        <Route path="/menu">
          <Popup />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
