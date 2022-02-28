//import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './NotFoundPage.css';



function NotFoundPage(props) {

  const history = useHistory();

  return (
    <div className="notFoundPage">
      <h1 className='notFoundPage__title'>404</h1>
      <p className='notFoundPage__text'>Страница не найдена</p>      
      <button type='button'  className='notFoundPage__link' onClick={history.goBack}>Назад</button>
    </div>
  );
}

export default NotFoundPage;