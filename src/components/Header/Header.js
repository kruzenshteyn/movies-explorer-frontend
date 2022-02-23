import './Header.css';
import logo from '../../images/logo.png';

function Header(props) {

  return (
    <header className="header">
      <img src={logo} alt='Лого' className="header"></img>
      
    </header>
  );
}

export default Header;