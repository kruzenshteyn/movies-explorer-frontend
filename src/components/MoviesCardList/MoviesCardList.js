import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';

function MoviesCardList(props) {

  

  return (
    <section className="moviesCardList">
      {
        props.movies.slice(0, props.movieCount).map((m)=>(
          <MoviesCard key={m.id} movie={m} />
        ))
      }      
    </section>
  );
}

export default MoviesCardList;