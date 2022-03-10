import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox(props) {
  

  return (
    <div className={`filterCheckbox ${props.checked ? 'filterCheckbox_checked' : ''}`} onClick={props.onChange}>
      <div className='filterCheckbox__tumb' ></div>
    </div>
  );
}

export default FilterCheckbox;