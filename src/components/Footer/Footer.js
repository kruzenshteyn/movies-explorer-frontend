import './Footer.css';

function Footer() {
  return (
    <footer className="footer root__footer">
      <div className='footer__info'>Учебный проект Яндекс.Практикум х BeatFilm.</div>
      <div className='footer__container'>
        <p className="footer__copyright">&copy; {new Date().getFullYear()}. Алексей Баев</p>
        <ul className='footer__list'>
          <li className='footer__item'>Яндекс.Практикум</li>
          <li className='footer__item'>Github</li>
          <li className='footer__item'>Facebook</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;