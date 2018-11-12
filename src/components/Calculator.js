
import React, { Component } from 'react';
import './Calculator.css';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';
import {Model} from '../logic/calculatorModel';


class Calculator extends Component {
  constructor(props) {
    super(props);

    this.model = new Model()    
    
    this.state = {
      currentOperand: this.model.currentOperand,
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(buttonLabel, buttonType) {
    switch (buttonType) {
      case 'numeric': 
        this.model.numericKeyPressed(buttonLabel);
        break;
      case 'binaryOperation':
        this.model.binaryOperationKeyPressed(buttonLabel);
        break;
      case 'unaryOperation':
        this.model.unaryOperationKeyPressed(buttonLabel);
        break;
      case 'equal':
        this.model.equalKeyPressed();
        break;
      case 'cancel':
        this.model.cancelKeyPressed();
        break;
    }
    this.setState({currentOperand: this.model.currentOperand});
  };

  

  render() {
    return (
      <div className="container">
        <Display DisplayStyle="calculator-display col-lg-12" value={this.state.currentOperand}/>
        <ButtonPanel handleButtonClick={this.handleButtonClick}/>
      </div>
    )
  }
}

export default Calculator;
