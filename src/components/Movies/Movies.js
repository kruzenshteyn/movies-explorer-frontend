import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies(props) {

  return (
    <div className='movies'>  
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList />
        <div className='movies__more'>
          <button type='button' className='movies__getmore-button'>Ещё</button>
        </div>
      </main>
      <Footer />
    </div>
    
  );
}

export default Movies;