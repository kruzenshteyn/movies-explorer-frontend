import {MOVIES_URL} from './config';

class MoviesApi{
    constructor(param){
      this._baseUrl = param.baseUrl;      
      this._movies = this._baseUrl + '/beatfilm-movies';      
      this._headers = param.headers;
    }

    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(res.status);
    }


    getMovies(){
      return fetch(this._movies, {
        method: "GET",
        headers: this._headers,        
      })
      .then(this._checkResponse);;
    }

  }

  const moviesApi = new MoviesApi({
    baseUrl: MOVIES_URL,
    headers: {
        'Content-Type': 'application/json'
    }
  });

  export default moviesApi;