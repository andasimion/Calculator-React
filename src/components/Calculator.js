
import React, { Component } from 'react';
import './Calculator.css';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';
import {isNumericKey} from '../logic/isNumericKey';
import {calculate} from '../logic/calculate';


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOperand: "0",
      currentOperation: null,
      previousOperand: null,
      resetCurrentOperand: false,
      lastKeyPressed: null
    };

    this.cancelKeyPressed = this.cancelKeyPressed.bind(this);
    this.equalKeyPressed = this.equalKeyPressed.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonLabel, buttonType) {
    switch (buttonType) {
      case 'numeric': 
        return this.numericKeyPressed(buttonLabel);
      case 'binaryOperation':
        return this.binaryOperationKeyPressed(buttonLabel);
      case 'unaryOperation':
        return this.unaryOperationKeyPressed(buttonLabel);
      case 'equal':
        return this.equalKeyPressed();
      case 'cancel':
        return this.cancelKeyPressed();
      default:
        return this.state;
    }
  };

  numericKeyPressed = (label) => {
    if (this.state.currentOperand === "0" && label === "0") {
        this.setState({currentOperand: "0"});
    } else if ((this.state.currentOperand === "0" || this.state.resetCurrentOperand) && label === ".") {
        this.setState({currentOperand: "0."});
    } else if (this.state.currentOperand.toString().includes('.') && label === ".") {
        //leave currentOperand unchanged
    } else if (this.state.currentOperand === "0" && label !== "0") {
        this.setState({currentOperand: label});
    } else if (this.state.resetCurrentOperand) {
        this.setState({previousOperand: this.state.currentOperand,
              currentOperand: label});
    } else {
        this.setState({currentOperand: this.state.currentOperand + label});
    };
    this.setState({resetCurrentOperand: false,
                   lastKeyPressed: label});
  };
  
  unaryOperationKeyPressed = (label) => {
    if (this.state.currentOperand === "ERROR") {
    } else {
      this.setState({currentOperand: Number.parseFloat(this.state.currentOperand) / 100});
      this.resetModel();
    };
    this.setState({lastKeyPressed: label});
  };

  binaryOperationKeyPressed = (label) => {
    this.setState({resetCurrentOperand: true});
    if (this.state.previousOperand === "ERROR"){
      this.setState({currentOperand: "ERROR"});
      this.resetModel();
    } else if (this.state.lastKeyPressed === "=") {
      this.setState({currentOperation: label});
    } else if (this.state.previousOperand !== null && isNumericKey(this.state.lastKeyPressed)) {
      this.equalKeyPressed();
      this.setState({currentOperation: label});
    } else {
      this.setState({previousOperand: this.state.currentOperand,
                     currentOperation: label});
    };
    this.setState({lastKeyPressed: label});
  };
 
  equalKeyPressed = () => {
    if (this.state.previousOperand === "ERROR") {
      this.setState({currentOperand: "ERROR"});
      this.resetModel();
    } else if (this.state.previousOperand === null && this.state.currentOperation === null) {
      // let the currentOperand unchanged
    } else if (this.state.currentOperation === "/" && this.state.currentOperand === "0") {
        this.setState({currentOperand: "ERROR",
                      previousOperand: null});
        this.resetModel();
    } else if (this.state.lastKeyPressed === "=") {
        let temporarOperand = this.state.previousOperand;
        this.setState({currentOperand: calculate(Number.parseFloat(this.state.currentOperand),
                                       this.state.currentOperation,
                                       Number.parseFloat(temporarOperand))});
    } else {
        let temporarOperand = this.state.currentOperand;
        this.setState({currentOperand: calculate(Number.parseFloat(this.state.previousOperand),
                                                      this.state.currentOperation,
                                                      Number.parseFloat(this.state.currentOperand))});
        this.setState({previousOperand: temporarOperand});
        this.resetModel();
    };
    this.setState({lastKeyPressed: "="});
  };

  cancelKeyPressed = () => {
    this.setState({
      currentOperand: "0",
      currentOperation: null,
      previousOperand: null,
      resetCurrentOperand: false,
      lastKeyPressed: null
    })
  };

  resetModel = () => {
    this.setState({
      resetCurrentOperand: true,
      lastKeyPressed: null
    });
  }

  render() {
    return (
      <div className="container">
        <Display value={this.state.currentOperand}/>
        <ButtonPanel handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default Calculator;
