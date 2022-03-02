import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {

  return (
    <section className='savedMovies'>
      <Header />  
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </section>
    
  );
}

export default SavedMovies;