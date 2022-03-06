import './SearchForm.css';
import imgFind from '../../images/find.svg';
import imgSearch from '../../images/searchIcon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  return(
    <section className='searchForm' >
      <div className="searchForm__content">
        <img src={imgSearch} alt='найти' className='searchForm__find-icon'></img>        
        <form className='searchForm__form'>
          <input
            type="text" className="searchForm__input" id="caption" placeholder="Фильм"
            required minLength="1" maxLength="30" name = "caption"        
          />            
          <button type="submit" className='searchForm__button'>
            <img src={imgFind} alt='найти' className='searchForm__search-icon'></img>  
          </button>
        </form>
        <div className='searchForm__shortfilm'>
          <FilterCheckbox className='searchForm__slider' />
          <p className='searchForm__text'>Короткометражки</p>
        </div>        
      </div>
    </section>
  )
}

export default SearchForm;