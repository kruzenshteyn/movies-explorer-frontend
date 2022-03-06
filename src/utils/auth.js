import BASE_URL from './config';

class Auth{
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

    register(email, password){
      return fetch(this._signUp, {
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

  const auth = new Auth({
    baseUrl: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: 'include',
  });

  export default auth;