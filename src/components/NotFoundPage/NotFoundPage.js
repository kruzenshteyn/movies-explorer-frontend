//import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage(props) {

  return (
    <div className="notFoundPage">
      <h1 className='notFoundPage__title'>404</h1>
      <p className='notFoundPage__text'>Страница не найдена</p>      
      <p  className='notFoundPage__link'>Назад //p</p>
    </div>
  );
}

export default NotFoundPage;