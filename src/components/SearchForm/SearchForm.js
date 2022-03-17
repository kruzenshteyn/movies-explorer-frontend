import './SearchForm.css';
import imgFind from '../../images/find.svg';
import imgSearch from '../../images/searchIcon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import React from 'react';

function SearchForm(props) {

  const [checked, setChecked] = React.useState(false);
  const [keyword, setKeyword] = React.useState('');

  React.useEffect(() => {
    setChecked(props.justShortMovies);
    setKeyword(props.keyword);
  }, [props.keyword, props.justShortMovies]);

  function handleChangeInput(e){
    e.preventDefault();
    setKeyword(e.target.value);
  }

  function handleCheckBoxClick(e){
    e.preventDefault();
    setChecked(!checked);
    props.onSubmit(keyword, !checked);
  }

  function handleSubmit(e){
    e.preventDefault();
    props.onSubmit(keyword, checked);
  }

  return(
    <section className='searchForm' >
      <div className="searchForm__content">
        <img src={imgSearch} alt='найти' className='searchForm__find-icon'></img>        
        <form className='searchForm__form'>
          <input
            type="text" className="searchForm__input" id="caption" placeholder="Фильм"

            required minLength="1" maxLength="30" name = "caption" value={keyword || ''}
            onChange={handleChangeInput}

          />            
          <button type="submit" className='searchForm__button' onClick={handleSubmit}>
            <img src={imgFind} alt='найти' className='searchForm__search-icon'></img>  
          </button>
        </form>
        <div className='searchForm__shortfilm'>
          <FilterCheckbox className='searchForm__slider' onChange={handleCheckBoxClick} checked={checked} />
          <p className={`searchForm__text ${checked ? 'searchForm__text_checked':''}`}>Короткометражки</p>
        </div>        
      </div>
    </section>
  )
}

export default SearchForm;