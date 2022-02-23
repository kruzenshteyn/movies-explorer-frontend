import './AboutProject.css';
import PartHeader from '../PartHeader/PartHeader';

function AboutProject(props) {

  return (
    <div className="aboutProject">
      <PartHeader title="О проекте" />
      <div className='aboutProject__container'>
        <div className='aboutProject__description'>
          <div className='aboutProject__part'>
            <h3 className='aboutProject__subtitle'>Дипломный проект включал 5 этапов</h3>
            <p className='aboutProject__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='aboutProject__part'>
            <h3 className='aboutProject__subtitle'>На выполнение диплома ушло 5 недель</h3>
            <p className='aboutProject__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='aboutProject__progress'>
          <div className='aboutProject__position'>
            <p className='aboutProject__value'>1 неделя</p>
            <p className='aboutProject__type'>Back-end</p>
          </div>
          <div className='aboutProject__position'>
            <p className='aboutProject__value aboutProject__value_color_grey'>4 недели</p>
            <p className='aboutProject__type'>Front-end</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;