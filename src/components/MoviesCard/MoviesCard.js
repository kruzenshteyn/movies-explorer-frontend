import './MoviesCard.css';

import React from 'react';

import { MOVIES_URL } from '../../utils/config';

function MoviesCard(props) {

  const movie = props.movie;
  const trailer = movie.trailerLink;
  const imageUrl = props.isSavedCards ? props.movie.image : MOVIES_URL + props.movie.image.url;

  React.useEffect(()=>{
    setIsSaved(props.movie.isSaved);
  }, [props.movie])

  const [isSaved, setIsSaved] = React.useState(false);

  function handleImageClick(e){
    e.preventDefault();
    window.open(trailer, '_blank').focus();
  }

  function handleBtnSaveClick(e){
    e.preventDefault();
    if(props.isSavedCards){
      props.onDeleteMovie(movie._id);
    } else {
      if(isSaved) {props.onDeleteMovie(movie);}
      else {props.onSaveMovie(movie);}
      setIsSaved(!isSaved);
      props.onUpdateMovies();
    }
  }
  
  return (
    <figure className="moviesCard">
      <figcaption className="moviesCard__caption">
        <div className='moviesCard__info'>
          <h2 className="moviesCard__title">{movie.nameRU}</h2>
          <p className='moviesCard__duration'>{movie.duration}</p>
        </div>
        <button 
          type="button" 
          className={`moviesCard__button ${props.isSavedCards ? 'moviesCard__button_state_close' :
                isSaved ? 'moviesCard__button_state_saved': 'moviesCard__button_state_unsaved'}`} 
          onClick={handleBtnSaveClick}
        >
        </button>        
      </figcaption>
      <img className="moviesCard__image" src={imageUrl} alt={movie.nameRU} onClick={handleImageClick} />
    </figure>
  );
}

export default MoviesCard;