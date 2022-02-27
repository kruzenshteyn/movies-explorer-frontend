import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';

function Movies(props) {

  return (
    <section className='movies'>  
      <Header />   
      <SearchForm />
      <MoviesCardList />
      <div className='movies__more'>
        <button type='button' className='movies__getmore-button'>Ещё</button>
      </div>
    </section>
    
  );
}

export default Movies;