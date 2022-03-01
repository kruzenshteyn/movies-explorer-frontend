import './Footer.css';

function Footer() {
  return (
    <footer className="footer root__footer">
      <div className='footer__info'>Учебный проект Яндекс.Практикум х BeatFilm.</div>
      <div className='footer__container'>
        <p className="footer__copyright">&copy; {new Date().getFullYear()}. Алексей Баев</p>
        <ul className='footer__list'>
          <a className='footer__item' href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          <a className='footer__item' href="https://github.com/">Github</a>
          <a className='footer__item' href="https://www.facebook.com/">Facebook</a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;