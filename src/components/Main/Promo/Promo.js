import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo(props) {

  return (
    <div className="promo">
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <NavTab className="promo__navTab" />
    </div>
  );
}

export default Promo;