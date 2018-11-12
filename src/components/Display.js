import React  from 'react';
//import './Calculator.css';

export const Display = (props) => {
    return (
      <div className={props.DisplayStyle}>{props.value}</div>
    )
}
