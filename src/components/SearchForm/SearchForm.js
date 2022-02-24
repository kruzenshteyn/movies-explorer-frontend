import './SearchForm.css';
import imgFind from '../../images/find.png';
import imgSearch from '../../images/searchIcon.png';
import imgSlider from '../../images/smalltumb.png';

function SearchForm(props) {
    //title, children, btnTitle, isOpen,
  return(
    <div className='searchForm' >
      <div className="searchForm__content">
        <img src={imgSearch} alt='найти' className='searchForm__find-icon'></img>        
        <form className='searchForm__form'>
          <input
          type="text" className="searchForm__input" id="caption" placeholder="Фильм"
          required minLength="1" maxLength="30" name = "caption"        
          />            
          <button type="submit" className='searchForm__button'>
            <img src={imgFind} alt='найти' className='searchForm__find-icon'></img>  
          </button>
        </form>
        <div className='searchForm__shortfilm'>
          <img src={imgSlider} alt='короткометражки' className='searchForm__slider'></img>  
          <p className='searchForm__text'>Короткометражки</p>
        </div>        
      </div>
    </div>
  )
}

export default SearchForm;