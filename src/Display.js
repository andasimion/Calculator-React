import React  from 'react';
import './Calculator.css';

export const Display = (props) => {
    return (
      <div className="calculator-display col-lg-12">{props.value}</div>
    )
  }