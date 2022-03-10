
import './MoviesNotFound.css';


function MoviesNotFound(props){


  return (
    <div className="moviesNotFound">
      {props.text}      
    </div>
  );

}

export default MoviesNotFound;