import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import AboutMe from './AboutMe/AboutMe';
import Techs from './Techs/Techs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Main(props) {

  return (
    <div>
      <Header loggedIn={props.loggedIn} />
      <main className="main">
        <Promo />
        <AboutProject name='aboutProject' />
        <Techs name='techs' />
        <AboutMe name='aboutMe' />
      </main>      
      <Footer />
    </div>
  );
}

export default Main;