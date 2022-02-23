import logo from '../../logo.svg';
import './App.css';
import '../Header/Header';
import '../Footer/Footer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Main from '../Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
