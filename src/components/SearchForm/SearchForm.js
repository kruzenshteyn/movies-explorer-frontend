import './SearchForm.css';
import imgFind from '../../images/find.svg';
import imgSearch from '../../images/searchIcon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import React from 'react';

import { useFormWithValidation } from '../../utils/useFormWithValidation';

function SearchForm(props) {

  const { values, handleChange, isValid, setValues } = useFormWithValidation();

  const [checked, setChecked] = React.useState(false);
  const [keyword, setKeyword] = React.useState('');

  React.useEffect(() => {
    setChecked(props.justShortMovies);
    setKeyword(props.keyword);
    setValues({...values, ['keyword']: props.keyword});
  }, [props.keyword, props.justShortMovies]);

  React.useEffect(() => {
    if(isValid){
      setKeyword(values['keyword']);
    }
  }, [isValid, values['keyword']])

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
            type="text" className="searchForm__input" placeholder="Введите название фильма"
            required minLength="1" maxLength="30" name = "keyword" value={values['keyword'] || ''}
            onChange={handleChange}
          />            
          <button type="submit" className='searchForm__button' onClick={handleSubmit} disabled={!isValid}>
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