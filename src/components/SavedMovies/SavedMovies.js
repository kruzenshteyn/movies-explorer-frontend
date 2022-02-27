import '../Movies/Movies.css';

import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';

function SavedMovies(props) {

  return (
    <section className='movies'>   
      <Header />  
      <SearchForm />
      <MoviesCardList />
    </section>
    
  );
}

export default SavedMovies;