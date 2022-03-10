import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import MOVIES from '../../data/data';
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';

import React, { useEffect } from 'react';

import useWindowSize from '../../utils/useWindowSize';

function Movies(props) {
  const [foundMovies, setFoundMovies] = React.useState([]);
  
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
  }, [windowSize, foundMovies]);

  

  function handleAddMoreClick(){
    setMovieCount(movieCount + movieCountIncrement);
    
  }

  function handleSubmit(keyword, justShortMovies){
    const sorted = MOVIES.filter((m) => {
      if(m.nameRU.toLowerCase().includes(keyword.toLowerCase())){
        if(justShortMovies){
          return m.duration < 40;
        }
        else return true;
      }
      else return false;
    } );
    setFoundMovies(sorted);
  }
  
  return (
    <div className='movies'>  
      <Header />
      <main>
        <SearchForm onSubmit={handleSubmit} />
        {
          foundMovies.length === 0 
          ? <MoviesNotFound text="Ничего не найдено" /> 
          : <MoviesCardList movies={foundMovies} movieCount={movieCount} />
        }       
        <div className={`movies__more ${(foundMovies.length < movieCount) ? '':'movies__more_active'}`}>
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