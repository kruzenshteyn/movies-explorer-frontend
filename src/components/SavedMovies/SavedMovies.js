import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';

import React from 'react';


function SavedMovies(props) {

  React.useEffect(() => {
    setFoundMovies(props.moviesData);
  }, [props.moviesData])

  const [foundMovies, setFoundMovies] = React.useState([]);

  const [isDataloading, setIsDataLoading] = React.useState(false);
    
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
    
    // Задержка для моделирования поиска на сервере
    setTimeout(()=>{
      setIsDataLoading(false);
      setFoundMovies(sorted);
      localStorage.setItem('movies', JSON.stringify(sorted)); 
    }, 500);
  }

  return (
    <div className='savedMovies'>
      <Header />  
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
              movieCount={foundMovies.length} 
              onDeleteMovie={props.onDeleteMovie}
              isSavedCards = {true}
            />
        }
      </main>
      <Footer />
    </div>
    
  );
}

export default SavedMovies;