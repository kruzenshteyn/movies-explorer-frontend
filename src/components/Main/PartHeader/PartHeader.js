import './PartHeader.css';

function PartHeader(props) {

  return (
    <div className="partHeader">
      <h2 className='partHeader__title'>{props.title}</h2>
    </div>
  );
}

export default PartHeader;