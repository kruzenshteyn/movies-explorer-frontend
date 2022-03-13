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
  //const [currentUser, setCurrentUser] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState([]);

  const [apiError, setApiError] = React.useState(null);

  const [moviesData, setMoviesData] = React.useState([]);

  const [savedMovies, setSavedMovies] = React.useState([]);

  
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
    
    if(token){      
      mainApi.getUserInfo()
      .then(res=>{
        setCurrentUser({email:res.email, _id:res._id, name:res.name, isLoggedIn:true});
        props.history.push('/movies');
        refreshProfileData();
        //refreshCardData();
        setApiError(null);
      })
      .catch(err => {
        console.log(err);
      })
    }
    else{
      setCurrentUser({email:'', _id:'', name:'', isLoggedIn:false});
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
    .then(res=>{
      localStorage.setItem('token', res.token);
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

  function handleLoadSavedMovies(){
    mainApi.getSavedMovies()
    .then(data => {
      setSavedMovies(data);
    })
    .catch((err) => {
      console.log(err);
    });
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
          <Route exact path="/">
            <Main />
          </Route>        
          <Route path="/movies">
            <Movies 
              moviesData={moviesData} 
              savedMovies={savedMovies}
              onSaveMovie={handleSaveMovie}
              onUnsaveMovie={handleUnsaveMovie}
              isDataloading={false}
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies 
              moviesData={savedMovies}
              onDeleteMovie={handleDeleteMovie}
            />
          </Route>
          <Route path="/profile">
            <Profile user={currentUser} onSignOut={handleSignOut} 
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default withRouter(App);
