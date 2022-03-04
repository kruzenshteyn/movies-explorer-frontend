import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {

  return (
    <div className='savedMovies'>
      <Header />  
      <main>
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </div>
    
  );
}

export default SavedMovies;