import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import AboutMe from './AboutMe/AboutMe';
import Techs from './Techs/Techs';
import HeaderMain from './HeaderMain/HeaderMain';
import Footer from '../Footer/Footer';

/* 

      
      <Techs />
      <AboutMe />
      <Footer />  
*/

function Main(props) {

  return (
    <div className="main">
      <HeaderMain />
      <Promo />
      <AboutProject />
      <Techs />
    </div>
  );
}

export default Main;