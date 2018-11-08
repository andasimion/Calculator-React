import React  from 'react';
import './Calculator.css';


export const Button = (props)  => {
  return (
    <button className="col-lg-3" onClick={props.onClick}>{props.label}</button>
  );
}

