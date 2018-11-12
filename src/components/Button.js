import React  from 'react';
//import './Calculator.css';


export const Button = (props)  => {
  return (
    <button className={props.buttonWidth} onClick={() => {props.handleClick(props.label, props.type)}} type={props.type}>{props.label}</button>
  );
}

