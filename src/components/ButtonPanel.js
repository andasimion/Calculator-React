import React  from 'react';
import { Button } from './Button';
import './Calculator.css';

export const ButtonPanel = (props) => {
    

    return (
      <div className="container col-lg-12">
        <div className="row">
          <Button className="col-lg-3" label={'7'} type={'numeric'} handleClick={props.handleButtonClick}/>
          <Button className="col-lg-3" label={'8'} type={'numeric'} handleClick={props.handleButtonClick}/>
          <Button className="col-lg-3" label={'9'} type={'numeric'} handleClick={props.handleButtonClick}/>
          <Button className="col-lg-3" label={'+'} type={'binaryOperation'} handleClick={props.handleButtonClick}/>
        </div>
        <div className="row">
          <Button className="col-lg-3" label={'4'} type={'numeric'} handleClick={props.handleButtonClick}/>
          <Button className="col-lg-3" label={'5'} type={'numeric'} handleClick={props.handleButtonClick}/>
          <Button className="col-lg-3" label={'6'} type={'numeric'} handleClick={props.handleButtonClick}/>
          <Button className="col-lg-3" label={'-'} type={'binaryOperation'} handleClick={props.handleButtonClick}/>
        </div>
        <div className="row">
          <Button className="col-lg-3" label={'1'} type={'numeric'} handleClick={props.handleButtonClick}/>
          <Button className="col-lg-3" label={'2'} type={'numeric'} handleClick={props.handleButtonClick}/>
          <Button className="col-lg-3" label={'3'} type={'numeric'} handleClick={props.handleButtonClick}/>
          <Button className="col-lg-3" label={'*'} type={'binaryOperation'} handleClick={props.handleButtonClick}/>
        </div>
        <div className="row">
          <Button className="col-lg-3" label={'.'} type={'numeric'} handleClick={props.handleButtonClick}/>
          <Button className="col-lg-3" label={'0'} type={'numeric'} handleClick={props.handleButtonClick}/>
          <Button className="col-lg-3" label={'%'} type={'unaryOperation'} handleClick={props.handleButtonClick}/>
          <Button className="col-lg-3" label={'/'} type={'binaryOperation'} handleClick={props.handleButtonClick}/>
        </div>
        <div className="row">
          <Button className="col-lg-6" label={'C'} type={'cancel'} handleClick={props.handleButtonClick}/>
          <Button className="col-lg-6" label={'='} type={'equal'} handleClick={props.handleButtonClick}/>
        </div>
      </div>
    )
}    