import './MoviesCard.css';
import testImage from '../../images/1-min.png';

function MoviesCard(props) {

  return (
    <figure className="moviesCard">
      
      
      <figcaption className="moviesCard__caption">
        <div className='moviesCard__info'>
          <h2 className="moviesCard__title">33 слова о дизайне</h2>
          <p className='moviesCard__duration'>1ч 47м</p>
        </div>
        <button type="button" className='moviesCard__button moviesCard__button_saved' ></button>        
      </figcaption>
      <img className="moviesCard__image" src={testImage} alt='Test' />
    </figure>
  );
}

export default MoviesCard;