import React, { Component } from 'react';
import './Calculator.css';

const Display = (props) => {
  return (
    <div className="calculator-display col-lg-12">{props.value}</div>
  )
}

const NumericKey = (props)  => {
  return (
    <button className="col-lg-3" onClick={props.onClick}>{props.label}</button>
  );
}

const UnaryOperationKey = (props)  => {
  return (
    <button className="col-lg-3" onClick={props.onClick}>{props.label}</button>
  );
}

const BinaryOperationKey = (props)  => {
  return (
    <button className="col-lg-3" onClick={props.onClick}>{props.label}</button>
  );
}

const CancelKey = (props) => {
  return (
    <button className="col-lg-6" onClick={props.onClick}>C</button>
  );
}

const Equalkey = (props) => {
  return (
    <button className="col-lg-6" onClick={props.onClick}>=</button>
  );
}

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
  }

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
    } else if (this.state.previousOperand !== null && this.isNumericKey(this.state.lastKeyPressed)) {
      this.equalKeyPressed();
      this.setState({currentOperation: label});
    } else {
      this.setState({previousOperand: this.state.currentOperand,
                     currentOperation: label});
    };
    this.setState({lastKeyPressed: label});
  };

  isNumericKey(key) {
    const numericKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    return numericKeys.includes(key);
  };

  calculate = (operand1, operator, operand2) => eval(`${operand1}${operator}${operand2}`)
  
 
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
        this.setState({currentOperand: this.calculate(Number.parseFloat(this.state.currentOperand),
                                       this.state.currentOperation,
                                       Number.parseFloat(temporarOperand))});
    } else {
        let temporarOperand = this.state.currentOperand;
        this.setState({currentOperand: this.calculate(Number.parseFloat(this.state.previousOperand),
                                                      this.state.currentOperation,
                                                      Number.parseFloat(this.state.currentOperand))});
        this.setState({previousOperand: temporarOperand});
        this.resetModel();
    };
    this.setState({lastKeyPressed: "="});
  };

  resetModel = () => {
    this.setState({
      resetCurrentOperand: true,
      lastKeyPressed: null
    });
  }

  cancelKeyPressed = () => {
    this.setState({
      currentOperand: "0",
      currentOperation: null,
      previousOperand: null,
      resetCurrentOperand: false,
      lastKeyPressed: null
    })
  };


  render() {
    return (
      <div className="container col-lg-8">
        <div>
          <Display value={this.state.currentOperand} />
        </div>
        <div>
          <NumericKey label={'7'} onClick={this.numericKeyPressed.bind(this, '7')}/>
          <NumericKey label={'8'} onClick={this.numericKeyPressed.bind(this, '8')}/>
          <NumericKey label={'9'} onClick={this.numericKeyPressed.bind(this, '9')}/>
          <BinaryOperationKey label={'+'} onClick={this.binaryOperationKeyPressed.bind(this, '+')}/>
        </div>
        <div>
          <NumericKey label={'4'} onClick={this.numericKeyPressed.bind(this, '4')}/>
          <NumericKey label={'5'} onClick={this.numericKeyPressed.bind(this, '5')}/>
          <NumericKey label={'6'} onClick={this.numericKeyPressed.bind(this, '6')}/>
          <BinaryOperationKey label={'-'} onClick={this.binaryOperationKeyPressed.bind(this, '-')}/>
        </div>
        <div>
          <NumericKey label={'1'} onClick={this.numericKeyPressed.bind(this, '1')}/>
          <NumericKey label={'2'} onClick={this.numericKeyPressed.bind(this, '2')}/>
          <NumericKey label={'3'} onClick={this.numericKeyPressed.bind(this, '3')}/>
          <BinaryOperationKey label={'*'} onClick={this.binaryOperationKeyPressed.bind(this, '*')}/>
        </div>
        <div>
          <NumericKey label={'.'} onClick={this.numericKeyPressed.bind(this, '.')}/>
          <NumericKey label={'0'} onClick={this.numericKeyPressed.bind(this, '0')}/>
          <UnaryOperationKey label={'%'} onClick={this.unaryOperationKeyPressed.bind(this, '%')}/>
          <BinaryOperationKey label={'/'} onClick={this.binaryOperationKeyPressed.bind(this, '/')}/>
        </div>
        <div>
          <CancelKey onClick={this.cancelKeyPressed}/>
          <Equalkey onClick={this.equalKeyPressed}/>
        </div>
      </div>

    );
  }
}

export default Calculator;