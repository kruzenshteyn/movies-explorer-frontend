import './Portfolio.css';

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <p className='portfolio_text'>Статичный сайт</p>
          <a className='portfolio_link' target="_blank" rel="noopener noreferrer" 
            href="https://github.com/kruzenshteyn/how-to-learn">↗</a>
        </li>
        <li className='portfolio__item'>
          <p className='portfolio_text'>Адаптивный сайт</p>
          <a className='portfolio_link' target="_blank" rel="noopener noreferrer" 
            href="https://kruzenshteyn.github.io/russian-travel/">↗</a>
        </li>
        <li className='portfolio__item'>
          <p className='portfolio_text'>Одностраничное приложение</p>
          <a className='portfolio_link' target="_blank" rel="noopener noreferrer" 
            href="https://github.com/kruzenshteyn/react-mesto-api-full">↗</a>          
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;