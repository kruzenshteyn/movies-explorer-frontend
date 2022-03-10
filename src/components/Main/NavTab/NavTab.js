import {  Link } from 'react-scroll';
import './NavTab.css';

function NavTab(props) {

  return (
    <nav className="navTab">
      <Link className='navTab__button' to="aboutProject">О проекте</Link>
      <Link className='navTab__button' to="techs">Технологии</Link>
      <Link className='navTab__button' to="aboutMe">Студент</Link>
    </nav>
  );
}

export default NavTab;