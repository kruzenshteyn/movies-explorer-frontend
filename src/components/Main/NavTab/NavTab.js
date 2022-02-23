import { NavLink } from 'react-router-dom';
import './NavTab.css';

function NavTab(props) {

  return (
    <nav className="navTab">
      <button type='button' className='navTab__button'>О проекте</button>
      <button type='button' className='navTab__button'>Технологии</button>
      <button type='button' className='navTab__button'>Студент</button>
    </nav>
  );
}

export default NavTab;