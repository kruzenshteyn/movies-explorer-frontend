import '../Movies/Movies.css';

import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {

  return (
    <section className='movies'>     
      <SearchForm />
      <MoviesCardList />
    </section>
    
  );
}

export default SavedMovies;