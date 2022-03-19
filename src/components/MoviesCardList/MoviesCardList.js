import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';

function MoviesCardList(props) {

  return (
    <section className="moviesCardList">
      {
        props.movies.slice(0, props.movieCount).map((m)=>(
          <MoviesCard 
            key={m.id ? m.id : m._id}
            movie={m}
            onSaveMovie={props.onSaveMovie}
            onDeleteMovie={props.onDeleteMovie}
            isSavedCards = {props.isSavedCards}
          />
        ))
      }      
    </section>
  );
}

export default MoviesCardList;