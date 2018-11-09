import React  from 'react';
import { Button } from './Button';
import './Calculator.css';

export const ButtonPanel = (props) => {
    

    return (
      <div className="container col-lg-12">
        <div className="row">
          <Button className="col-lg-4" label={'7'} type={'numeric'} onClick={() => {props.handleClick('7', 'numeric')}}/>
          <Button className="col-lg-4" label={'8'} type={'numeric'} onClick={() => {props.handleClick('8', 'numeric')}}/>
          <Button className="col-lg-4" label={'9'} type={'numeric'} onClick={() => {props.handleClick('9', 'numeric')}}/>
          <Button className="col-lg-4" label={'+'} type={'binaryOperation'} onClick={() => {props.handleClick('+', 'binaryOperation')}}/>
        </div>
        <div className="row">
          <Button className="col-lg-4" label={'4'} type={'numeric'} onClick={() => {props.handleClick('4', 'numeric')}}/>
          <Button className="col-lg-4" label={'5'} type={'numeric'} onClick={() => {props.handleClick('5', 'numeric')}}/>
          <Button className="col-lg-4" label={'6'} type={'numeric'} onClick={() => {props.handleClick('6', 'numeric')}}/>
          <Button className="col-lg-4" label={'-'} type={'binaryOperation'} onClick={() => {props.handleClick('-', 'binaryOperation')}}/>
        </div>
        <div className="row">
          <Button className="col-lg-4" label={'1'} type={'numeric'} onClick={() => {props.handleClick('1', 'numeric')}}/>
          <Button className="col-lg-4" label={'2'} type={'numeric'} onClick={() => {props.handleClick('2', 'numeric')}}/>
          <Button className="col-lg-4" label={'3'} type={'numeric'} onClick={() => {props.handleClick('3', 'numeric')}}/>
          <Button className="col-lg-4" label={'*'} type={'binaryOperation'} onClick={() => {props.handleClick('*', 'binaryOperation')}}/>
        </div>
        <div className="row">
          <Button className="col-lg-4" label={'.'} type={'numeric'} onClick={() => {props.handleClick('.', 'numeric')}}/>
          <Button className="col-lg-4" label={'0'} type={'numeric'} onClick={() => {props.handleClick('0', 'numeric')}}/>
          <Button className="col-lg-4" label={'%'} type={'unaryOperation'} onClick={() => {props.handleClick('%', 'unaryOperation')}}/>
          <Button className="col-lg-4" label={'/'} type={'binaryOperation'} onClick={() => {props.handleClick('/', 'binaryOperation')}}/>
        </div>
        <div className="row">
          <Button className="col-lg-6" label={'C'} type={'cancel'} onClick={() => {props.handleClick('C', 'cancel')}}/>
          <Button className="col-lg-6" label={'='} type={'equal'} onClick={() => {props.handleClick('=', 'equal')}}/>
        </div>
      </div>
    )
}    