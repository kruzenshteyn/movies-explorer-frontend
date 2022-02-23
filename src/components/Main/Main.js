import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import AboutMe from './AboutMe/AboutMe';
import Techs from './Techs/Techs';

function Main(props) {

  return (
    <div className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </div>
  );
}

export default Main;