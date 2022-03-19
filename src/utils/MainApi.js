import {API_URL} from './config';
import { MOVIES_URL } from '../utils/config';
/* http://localhost:3000/
http://localhost:3000/movies
http://localhost:3000/saved-movies
http://localhost:3000/profile
http://localhost:3000/signin
http://localhost:3000/signup
http://localhost:3000/notFound */

class MainApi{
    constructor(param){
      this._baseUrl = param.baseUrl;
      this._signIn = this._baseUrl + 'signin';
      this._signUp = this._baseUrl + 'signup';
      this._signOut = this._baseUrl + 'signout';
      this._movies = this._baseUrl + 'movies';
      this._me = this._baseUrl + 'users/me';
      this._headers = param.headers;
    }

    _checkResponse(res) {
      //console.log(res);
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(res.status);
    }

    register(email, password, name){
      return fetch(this._signUp, {
        method: "POST",
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          email:email,
          password:password,
          name:name,
        })
      })
      .then(this._checkResponse);
    }

    login(email, password){
      return fetch(this._signIn, {
        method: "POST",
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          email:email,
          password:password
        })
      })
      .then(this._checkResponse);
    }

    logout(){
      return fetch(this._signOut, {
        method: "GET",
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(this._checkResponse);;
    }

    getUserInfo(){
      return fetch(this._me, {
        method: "GET",
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(this._checkResponse);;
    }

    setUserInfo(name, email){
      return fetch(this._me, {
        method: "PATCH",
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          name:name,
          email:email
        })
      })
      .then(this._checkResponse);;
    }

    getSavedMovies(){
      return fetch(this._movies, {
        method: "GET",
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(this._checkResponse);
    }

    deleteMovie(id){
      return fetch(`${this._movies}/${id}`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }        
      })
      .then(this._checkResponse);    
    }

    saveMovie(data){
      
      return fetch(this._movies, {
        method: "POST",
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          country: data.country === null ? 'none' : data.country,          
          description: data.description === null ? 'none' : data.description,
          director: data.director === null ? 'none' : data.director,
          duration: data.duration,
          image: MOVIES_URL + data.image.url,
          nameEN: data.nameEN === null ? 'none' : data.nameEN,
          nameRU: data.nameRU,
          thumbnail: MOVIES_URL + data.image.formats.thumbnail.url,
          trailerLink: data.trailerLink,
          year: data.year === null ? 0 : data.year,
          movieId: data.id
        })
      })
      .then(this._checkResponse);
    }
  }

  const mainApi = new MainApi({
    baseUrl: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: 'include',
  });

  export default mainApi;