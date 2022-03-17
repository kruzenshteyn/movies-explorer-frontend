import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';

import React, { useEffect } from 'react';

import useWindowSize from '../../utils/useWindowSize';
import Preloader from '../Preloader/Preloader';


import {
  MOVIE_COUNT_1280,
  MOVIE_COUNT_768,
  MOVIE_COUNT_320,

  MOVIE_COUNT_INC_1280,
  MOVIE_COUNT_INC_768,
  MOVIE_COUNT_INC_320
} from '../../utils/config';

function Movies(props) {
  const [foundMovies, setFoundMovies] = React.useState([]);

  const [isDataloading, setIsDataLoading] = React.useState(false);
  
  const windowSize = useWindowSize();
  const [movieCount, setMovieCount] = React.useState(12);
  const [maxMovieCount, setMaxMovieCount] = React.useState(12);
  const [movieCountIncrement, setMovieCountIncrement] = React.useState(3);

  const [justShortMovies, setJustShortMovies] = React.useState(false);
  const [keyword, setKeyword] = React.useState('');
  
  useEffect(()=>{    
    if(windowSize.width < 766){
      setMaxMovieCount(MOVIE_COUNT_320);
      setMovieCountIncrement(MOVIE_COUNT_INC_320);
    } else if (windowSize.width < 1278){
      setMaxMovieCount(MOVIE_COUNT_768);
      setMovieCountIncrement(MOVIE_COUNT_INC_768);
    } else {
      setMaxMovieCount(MOVIE_COUNT_1280);
      setMovieCountIncrement(MOVIE_COUNT_INC_1280);
    }
    setMovieCount(maxMovieCount);
  }, [windowSize, props.moviesData, maxMovieCount]);

  useEffect(() => {
    loadLocalStorage();
  }, []);

  useEffect(() => {   
    loadLocalStorage();
    setIsDataLoading(false);
  }, [props.moviesData])

  function loadLocalStorage(){
    const lastRes = localStorage.getItem('movies');
    if(lastRes) 
    {
      const data = JSON.parse(lastRes);
      setJustShortMovies(data.justShortMovies);
      setKeyword(data.keyword);
      setFoundMovies(data.movies);
    }
  }

  function handleAddMoreClick(){
    setMovieCount(movieCount + movieCountIncrement);    
  }

  //searchFunc

  function handleSubmit(keyword, justShortMovies){
    setIsDataLoading(true);
    // Поиск по заданному ключевому слову
    props.searchFunc(keyword, justShortMovies);
    setFoundMovies([]);
  }

  function updateLocalStorage(){
    /* foundMovies.forEach(function (item) {
      const isInSaved = props.savedMovies.find((x)=> x.movieId === item.id);      
      item.isSaved = isInSaved ? true : false;
    })
    localStorage.setItem('movies', JSON.stringify({movies:foundMovies, keyword, justShortMovies})); */
  }
  
  return (
    <div className='movies'>  
      <Header loggedIn={props.loggedIn}/>
      <main>
        <SearchForm onSubmit={handleSubmit} keyword={keyword} justShortMovies={justShortMovies} />
        {
          isDataloading ? <Preloader /> : <></>
        }
        {
          foundMovies.length === 0 && !isDataloading
          ? <MoviesNotFound text="Ничего не найдено" /> 
          : <MoviesCardList 
              movies={foundMovies} 
              movieCount={movieCount} 
              onSaveMovie={props.onSaveMovie}
              onDeleteMovie={props.onUnsaveMovie}
              isSavedCards = {false}
              onUpdateMovies={updateLocalStorage}
            />
        }       
        <div className={`movies__more ${(foundMovies.length <= movieCount) ? '':'movies__more_active'}`}>
          <button 
            type='button' className='movies__getmore-button'
            onClick={handleAddMoreClick}
          >Ещё</button>
        </div>
      </main>
      <Footer />
    </div>
    
  );
}

export default Movies;