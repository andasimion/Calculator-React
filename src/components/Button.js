import React  from 'react';
//import './Calculator.css';


export const Button = (props)  => {
  return (
    <button className="button col-lg-3" onClick={props.onClick} type={props.type}>{props.label}</button>
  );
}

