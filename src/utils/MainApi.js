import {API_URL} from './config';

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
      this._signOut = this._baseUrl + '';
      this._me = this._baseUrl + 'users/me';

      this._headers = param.headers;
    }

    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
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

    getUserInfo(jwt){
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
  }

  const mainApi = new MainApi({
    baseUrl: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: 'include',
  });

  export default mainApi;