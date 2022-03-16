import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';

import React, { useEffect } from 'react';

import useWindowSize from '../../utils/useWindowSize';
import Preloader from '../Preloader/Preloader';


function Movies(props) {
  const [foundMovies, setFoundMovies] = React.useState([]);

  
  const [isDataloading, setIsDataLoading] = React.useState(false);
  
  const windowSize = useWindowSize();
  const [movieCount, setMovieCount] = React.useState(12);
  const [maxMovieCount, setMaxMovieCount] = React.useState(12);
  const [movieCountIncrement, setMovieCountIncrement] = React.useState(3);
  
  useEffect(()=>{    
    if(windowSize.width < 766){
      setMaxMovieCount(5);
      setMovieCountIncrement(1);
    } else if (windowSize.width < 1278){
      setMaxMovieCount(8);
      setMovieCountIncrement(2);
    } else {
      setMaxMovieCount(12);
      setMovieCountIncrement(3);
    }
    setMovieCount(maxMovieCount);
  }, [windowSize, foundMovies, maxMovieCount]);

  useEffect(() => {
    const lastRes = localStorage.getItem('movies');
    if(lastRes) setFoundMovies(JSON.parse(lastRes));
  }, []);

  useEffect(() => {   
      updateLocalStorage();    
  }, [foundMovies])

  function handleAddMoreClick(){
    setMovieCount(movieCount + movieCountIncrement);    
  }

  function handleSubmit(keyword, justShortMovies){
    setIsDataLoading(true);
    setFoundMovies([]);
    // Поиск по заданному ключевому слову
    var sorted = props.moviesData.filter((m) => {
      if(m.nameRU.toLowerCase().includes(keyword.toLowerCase())){
        if(justShortMovies){
          return m.duration < 40;
        }
        else return true;
      }
      else return false;
    } );
    // Проверка на наличие в сохранённых
    sorted.forEach(function (item) {
      const isInSaved = props.savedMovies.find((x)=> x.movieId === item.id);      
      item.isSaved = isInSaved ? true : false;
    })
    // Задержка для моделирования поиска на сервере
    setTimeout(()=>{
      setIsDataLoading(false);
      setFoundMovies(sorted);
      localStorage.setItem('movies', JSON.stringify(sorted)); 
    }, 500);
  }

  function updateLocalStorage(){
    foundMovies.forEach(function (item) {
      const isInSaved = props.savedMovies.find((x)=> x.movieId === item.id);      
      item.isSaved = isInSaved ? true : false;
    })
    localStorage.setItem('movies', JSON.stringify(foundMovies));
  }
  
  return (
    <div className='movies'>  
      <Header loggedIn={props.loggedIn}/>
      <main>
        <SearchForm onSubmit={handleSubmit} />
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