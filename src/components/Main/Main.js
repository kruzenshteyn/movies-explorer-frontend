import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import AboutMe from './AboutMe/AboutMe';
import Techs from './Techs/Techs';
import HeaderMain from './HeaderMain/HeaderMain';
import Footer from '../Footer/Footer';


function Main(props) {

  return (
    <div>
      <HeaderMain />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>      
      <Footer />
    </div>
  );
}

export default Main;