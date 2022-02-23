import './Footer.css';

function Footer() {
  return (
    <footer className="footer root__footer">
      <p className="footer__copyright">&copy; {new Date().getFullYear()}. Алексей Баев</p>
    </footer>
  );
}

export default Footer;