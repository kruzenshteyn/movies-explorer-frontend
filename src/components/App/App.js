import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Movies from '../Movies/Movies';


/* import Main from '../Main/Main';
import HeaderMain from '../Main/HeaderMain/HeaderMain'; */

//import NotFoundPage from '../NotFoundPage/NotFoundPage';
/* 
<HeaderMain />
      <Main /> */

function App() {
  return (
    <div className="App">      
      <Header />      
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
