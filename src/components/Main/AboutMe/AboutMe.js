import './AboutMe.css';
import PartHeader from '../PartHeader/PartHeader';
import Portfolio from '../Portfolio/Portfolio';
import photo from '../../../images/photo.png';
import { Link } from 'react-router-dom';

function AboutMe(props) {

  return (
    <div className="aboutMe">
      <PartHeader title='Студент' />
      <div className='aboutMe__container'>
        <div className='aboutMe__info'>
          <p className='aboutMe__name'>Виталий</p>
          <p className='aboutMe__profession'>Фронтенд-разработчик, 30 лет</p>
          <p className='aboutMe__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 
            2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-
            разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <nav className='aboutMe__links'>
            <a className='aboutMe__link' href="https://www.facebook.com/">Facebook</a>
            <a className='aboutMe__link' href="https://github.com/">Github</a>
          </nav>
        </div>
        <img src={photo} className='aboutMe__photo' alt='Фото'></img>
      </div>
      <Portfolio />
    </div>
  );
}

export default AboutMe;