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
  

  //Check token при загрузке
  React.useEffect(()=>{
    checkToken();    
  },[]);

  React.useEffect(() => {
    if(isLoggedIn)
      handleLoadSavedMovies();
  }, [isLoggedIn])

  function handleSignOut(){    
    mainApi.logout()
    .then(_=>{
      localStorage.removeItem('token');
      localStorage.removeItem('movies');
      setCurrentUser({email:'', _id:'', name:'', isLoggedIn:false});
      setIsLoggedIn(false);
      props.history.push('/');
    })
    .catch((err)=> {
      setInfoTooltipProps({isOpen:true, isSuccess:false, message:getServerErrorMessage(err)});
      setApiError(getServerErrorMessage(err));
      console.log(`Error = ${err}`)
    });
  }

  function checkToken(isFromLogin = false){
    const token = localStorage.getItem('token');
    if(token){      
      mainApi.getUserInfo()
      .then(res=>{
        setCurrentUser({email:res.email, _id:res._id, name:res.name, isLoggedIn:true});
        setIsLoggedIn(true);
        if(isFromLogin) props.history.push('/movies');
        setApiError(null);        
      })
      .catch(err => {
        console.log(err);
      })
    }
    else{
      setCurrentUser({email:'', _id:'', name:'', isLoggedIn:false});
      setIsLoggedIn(false);
    }
  }

  function handleRegister(data){
    mainApi.register(data.email, data.password, data.name)
    .then(res=>{
      setInfoTooltipProps({isOpen:true, isSuccess:true, message:'Пользователь успешно зарегистрирован'});
      handleLogin(data);      
    })
    .catch((err)=> {
      setInfoTooltipProps({isOpen:true, isSuccess:false, message:getServerErrorMessage(err)});
      setApiError(getServerErrorMessage(err));
      console.log(`Error = ${err}`)
    });
  }

  function handleLogin(data){
    mainApi.login(data.email, data.password)
    .then(res=>{
      localStorage.setItem('token', res.token);
      checkToken(true);      
    })
    .catch((err)=> {
      setInfoTooltipProps({isOpen:true, isSuccess:false});
      setApiError(getServerErrorMessage(err));
      console.log(`Error = ${err}`)
    });
  }

  function handleEditProfile(data){
    mainApi.setUserInfo(data.name, data.email)
    .then(res=>{      
      setCurrentUser({email:res.email, _id:res._id, name:res.name});      
      setApiError(null);     
      setInfoTooltipProps({isOpen:true, isSuccess:true, message:'Данные успешно изменены'});
    })
    .catch((err)=> {
      setInfoTooltipProps({isOpen:true, isSuccess:false, message:getServerErrorMessage(err)});
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
      var movies = data.filter((m) => m.owner === currentUser._id);
      setSavedMovies(movies);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const closeAllPopups = ()=>{
    setInfoTooltipProps(_=>({...infoTooltipProps, isOpen:false}));
  }


  function findInSavedMovies(m){
    const movie = savedMovies.find((x)=> x.movieId === m.id)
    if(movie) return movie._id;
    else return undefined;
  }

  function addItemToSavedList(movie){
    savedMovies.push(movie);
  }

  React.useEffect(() => {
    updateMovieList();    
  }, [savedMovies])

  function updateMovieList(movie){    
    
    if(savedMovies.length === 0) return;
    const lastRes = localStorage.getItem('movies');
    
    if(lastRes) 
    {      
      const data = JSON.parse(lastRes);
      
      data.movies.forEach(function (item) {
        const isInSaved = savedMovies.find((x)=> x.movieId === item.id);      
        item.isSaved = isInSaved ? true : false;
      })
      localStorage.setItem('movies', JSON.stringify(data));
    }
  }

  function findInMovies(keyword, justShortMovies){
    moviesApi.getMovies()
    .then(data => {
      var sorted = data.filter((m) => {
        if(m.nameRU.toLowerCase().includes(keyword.toLowerCase())){
          if(justShortMovies){
            return m.duration < 40; //config
          }
          else return true;
        }
        else return false;
      } );  
      // Проверка на наличие в сохранённых
      sorted.forEach(function (item) {
        const isInSaved = savedMovies.find((x)=> x.movieId === item.id);      
        item.isSaved = isInSaved ? true : false;
      })
      setMoviesData(sorted);
      localStorage.setItem('movies', JSON.stringify({movies:sorted, keyword, justShortMovies}));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleSaveMovie(data){    
    mainApi.saveMovie(data)
    .then(data => {      
      addItemToSavedList(data);
      updateMovieList(data);
    })
    .catch((err) => {
      setInfoTooltipProps({isOpen:true, isSuccess:false, message:getServerErrorMessage(err)});
      console.log(err);
    });
  }

  function handleUnsaveMovie(data){
    const id = findInSavedMovies(data);
    mainApi.deleteMovie(id)
    .then(_=> {
      handleLoadSavedMovies();
    })
    .catch((err) => {      
      setInfoTooltipProps({isOpen:true, isSuccess:false, message:getServerErrorMessage(err)});
      console.log(getServerErrorMessage(err));
    });
  }

  function handleDeleteMovie(id){    
    mainApi.deleteMovie(id)
    .then(_=> {
      handleLoadSavedMovies();
    })
    .catch((err) => {
      setInfoTooltipProps({isOpen:true, isSuccess:false, message:getServerErrorMessage(err)});      
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
              loggedIn={isLoggedIn}
              searchFunc={findInMovies}
            />
          </ProtectedRoute>
          <ProtectedRoute path="/saved-movies" loggedIn={isLoggedIn}>
            <SavedMovies 
              moviesData={savedMovies}
              onDeleteMovie={handleDeleteMovie}
              loggedIn={isLoggedIn}
            />
          </ProtectedRoute>
          <ProtectedRoute path="/profile" loggedIn={isLoggedIn}>
            <Profile user={currentUser} onSignOut={handleSignOut} 
              onSubmit={handleEditProfile} apiError={apiError}
              resetApiError={resetApiError} loggedIn={isLoggedIn}/>
          </ProtectedRoute>
          <Route exact path="/">
            <Main loggedIn={isLoggedIn} />
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
        <InfoTooltip 
          isOpen={infoTooltipProps.isOpen} 
          onClose={closeAllPopups} 
          isSuccess={infoTooltipProps.isSuccess}
          message={infoTooltipProps.message}
        />
      </CurrentUserContext.Provider>
    </div>
  ); 
}

export default withRouter(App);
