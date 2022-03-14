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
//import Popup from '../Popup/Popup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../../utils/ProtectedRoute';


/* Api */
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import {getServerErrorMessage} from '../../utils/getServerErrorMessage'

function App(props) {

  const [currentUser, setCurrentUser] = React.useState({email:'', _id:'', name:''});

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [apiError, setApiError] = React.useState(null);

  const [moviesData, setMoviesData] = React.useState([]);

  const [savedMovies, setSavedMovies] = React.useState([]);

  const [infoTooltipProps, setInfoTooltipProps] = React.useState({isOpen:false, isSuccess:true});
  
  function refreshMoviesData(){
    moviesApi.getMovies()
    .then(data => {
      setMoviesData(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

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
    handleLoadSavedMovies();    
    refreshMoviesData();
  },[]);

  function handleSignOut(){
    localStorage.removeItem('token');
    setCurrentUser({email:'', _id:'', name:'', isLoggedIn:false});
    props.history.push('/');    
  }

  function checkToken(){
    const token = localStorage.getItem('token');
    console.log(token);
    if(token){      
      mainApi.getUserInfo()
      .then(res=>{
        setCurrentUser({email:res.email, _id:res._id, name:res.name});
        setIsLoggedIn(true);
        props.history.push('/movies');
        refreshProfileData();
        setApiError(null);
        return true;
      })
      .catch(err => {
        console.log(err);
        return false;
      })
    }
    else{
      setCurrentUser({email:'', _id:'', name:''});
      setIsLoggedIn(false);
      return false;
    }
  }

  function handleRegister(data){
    mainApi.register(data.email, data.password, data.name)
    .then(data=>{
      setInfoTooltipProps({isOpen:true, isSuccess:true});
      props.history.push('/signin');
      
    })
    .catch((err)=> {
      setInfoTooltipProps({isOpen:true, isSuccess:false});
      setApiError(getServerErrorMessage(err));
      console.log(`Error = ${err}`)
    });
  }

  function handleLogin(data){
    mainApi.login(data.email, data.password)
    .then(res=>{
      localStorage.setItem('token', res.token);
      const isOk = checkToken();
      if(!isOk) setInfoTooltipProps({isOpen:true, isSuccess:false});
    })
    .catch((err)=> {
      setInfoTooltipProps({isOpen:true, isSuccess:false});
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
      setInfoTooltipProps({isOpen:true, isSuccess:false});
      setApiError(getServerErrorMessage(err));
      console.log(`Error = ${err}`)
    });
  }

  function resetApiError(){
    setApiError(null);
  }

  function handleLoadSavedMovies(){
    mainApi.getSavedMovies()
    .then(data => {
      setSavedMovies(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const closeAllPopups = ()=>{
    setInfoTooltipProps(_=>({...infoTooltipProps, isOpen:false}));
  }

  function handleSaveMovie(data){    
    mainApi.saveMovie(data)
    .then(data => {
      handleLoadSavedMovies();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function findInSavedMovies(m){
    const movie = savedMovies.find((x)=> x.movieId === m.id)
    if(movie) return movie._id;
    else return undefined;
  }

  function handleUnsaveMovie(data){
    const id = findInSavedMovies(data);
    mainApi.deleteMovie(id)
    .then(data => {
      handleLoadSavedMovies();
    })
    .catch((err) => {      
      console.log(getServerErrorMessage(err));
    });
  }

  function handleDeleteMovie(id){    
    mainApi.deleteMovie(id)
    .then(data => {
      handleLoadSavedMovies();
    })
    .catch((err) => {      
      console.log(getServerErrorMessage(err));
    });
  }


  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <ProtectedRoute path="/movies" loggedIn={isLoggedIn}>
            <Movies 
              moviesData={moviesData} 
              savedMovies={savedMovies}
              onSaveMovie={handleSaveMovie}
              onUnsaveMovie={handleUnsaveMovie}
              isDataloading={false}
            />
          </ProtectedRoute>
          <ProtectedRoute path="/saved-movies" loggedIn={isLoggedIn}>
            <SavedMovies 
              moviesData={savedMovies}
              onDeleteMovie={handleDeleteMovie}
            />
          </ProtectedRoute>
          <ProtectedRoute path="/profile" loggedIn={isLoggedIn}>
            <Profile user={currentUser} onSignOut={handleSignOut} 
              onSubmit={handleEditProfile} apiError={apiError}
              resetApiError={resetApiError} />
          </ProtectedRoute>
          <Route exact path="/">
            <Main />
          </Route> 
          <Route path="/signin">
            <Login onSignIn={handleLogin} apiError={apiError} resetApiError={resetApiError}/>
          </Route>
          <Route path="/signup">
            <Register onSignUp={handleRegister} apiError={apiError} resetApiError={resetApiError}/>
          </Route>          
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
        <InfoTooltip isOpen={infoTooltipProps.isOpen} onClose={closeAllPopups} isSuccess={infoTooltipProps.isSuccess}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default withRouter(App);
