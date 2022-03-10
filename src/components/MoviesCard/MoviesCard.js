import './MoviesCard.css';

import React from 'react';

const URL = 'https://api.nomoreparties.co';

function MoviesCard(props) {

  const movie = props.movie;
  const trailer = movie.trailerLink;

  const [isSaved, setIsSaved] = React.useState(false);

  function handleImageClick(e){
    e.preventDefault();
    console.log(`Image ${movie.nameRU} clicked`);
    //window.open(trailer, '_blank').focus();
  }

  function handleBtnSaveClick(e){
    e.preventDefault();
    setIsSaved(!isSaved);
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
          className={`moviesCard__button ${isSaved ? 'moviesCard__button_state_saved': 'moviesCard__button_state_unsaved'}`} 
          onClick={handleBtnSaveClick}
        >
        </button>        
      </figcaption>
      <img className="moviesCard__image" src={URL + movie.image.url} alt={movie.nameRU} onClick={handleImageClick} />
    </figure>
  );
}

export default MoviesCard;