import './App.css';
import '../Header/Header';
import '../Footer/Footer';
import Footer from '../Footer/Footer';
import HeaderMain from '../Main/HeaderMain/HeaderMain';

import Main from '../Main/Main';
//import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">      
      <HeaderMain />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
