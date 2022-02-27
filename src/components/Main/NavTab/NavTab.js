import { NavLink } from 'react-router-dom';
import './NavTab.css';

function NavTab(props) {

  return (
    <nav className="navTab">
      <NavLink className='navTab__button' to="/">О проекте</NavLink>
      <NavLink className='navTab__button' to="/">Технологии</NavLink>
      <NavLink className='navTab__button' to="/">Студент</NavLink>
    </nav>
  );
}

export default NavTab;