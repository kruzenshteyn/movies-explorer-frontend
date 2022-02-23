import './Portfolio.css';

function Portfolio(props) {
  return (
    <div className="portfolio">
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <p className='portfolio_text'>Статичный сайт</p>
          <p className='portfolio_text'>↗</p>
        </li>
        <li className='portfolio__item'>
          <p className='portfolio_text'>Адаптивный сайт</p>
          <p className='portfolio_text'>↗</p>
        </li>
        <li className='portfolio__item'>
          <p className='portfolio_text'>Одностраничное приложение</p>
          <p className='portfolio_text'>↗</p>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;