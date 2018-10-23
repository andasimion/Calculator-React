import React, { Component } from 'react';
import './App.css';

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

const OperationKey = (props)  => {
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
      previousOperation: null,
      resetCurrentOperand: false,
    };

    this.cancelKeyPressed = this.cancelKeyPressed.bind(this);
    this.equalKeyPressed = this.equalKeyPressed.bind(this);
  }

  numericKeyPressed = (label) => {
    console.log("pressed key " + label);
    if (this.state.currentOperand === "0" && label === "0") {
        this.setState({currentOperand: "0"});
    } else if ((this.state.currentOperand === "0" || this.state.resetCurrentOperand) && label === ".") {
        this.setState({currentOperand: "0.",
                      resetCurrentOperand: false});
    } else if (this.state.currentOperand.toString().includes('.') && label === ".") {
        return;
    } else if (this.state.currentOperand === "0" && label !== "0") {
        this.setState({currentOperand: label,
                      resetCurrentOperand: false});
    } else if (this.state.resetCurrentOperand) {
        this.setState({previousOperand: this.state.currentOperand,
              currentOperand: label,
              resetCurrentOperand: false});
    } else {
        this.setState({currentOperand: this.state.currentOperand + label});
  };
}

  operationKeyPressed = (label) => {
    if (this.state.previousOperand !== null) {
      this.equalKeyPressed();
    };
    this.setState({currentOperation: label,
                  previousOperand: this.state.currentOperand,
                  resetCurrentOperand: true});
  };


  cancelKeyPressed = () => {
    this.setState({
      currentOperand: "0",
      currentOperation: null,
      previousOperand: null,
      resetCurrentOperand: false
    })
  };

  equalKeyPressed = () => {
    console.log("pressed equa l key ");
    switch (this.state.currentOperation) {
      case "+":
          this.setState({currentOperand: Number.parseFloat(this.state.previousOperand) + Number.parseFloat(this.state.currentOperand)});
          this.resetModel();
          break;
      case "-":
          this.setState({currentOperand: Number.parseFloat(this.state.previousOperand) - Number.parseFloat(this.state.currentOperand)});
          this.resetModel();
          break;
      case "*":
          this.setState({currentOperand: Number.parseFloat(this.state.previousOperand) * Number.parseFloat(this.state.currentOperand)});
          this.resetModel();
          break;    
      case "/":
          debugger;
          if (this.state.currentOperand === "0") {
              this.setState({currentOperand: "ERROR",
                            currentOperation: null,
                            resetCurrentOperand: true});
              this.resetModel();
          } else if (this.state.previousOperand === "0") {
              this.setState({currentOperand: "0"});
              this.resetModel();
          } else {
            console.log("testtstst")
            debugger;
              this.setState({currentOperand: Number.parseFloat(this.previousOperand) / Number.parseFloat(this.currentOperand)});
              this.resetModel();
          }
          break;  
      default:
          throw "unknown operation!";
    }
  };

  resetModel = () => {
    this.setState({
      previousOperand: null,
      currentOperation: null,
      resetCurrentOperand: true
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
          <OperationKey label={'+'} onClick={this.operationKeyPressed.bind(this, '+')}/>
        </div>
        <div>
          <NumericKey label={'4'} onClick={this.numericKeyPressed.bind(this, '4')}/>
          <NumericKey label={'5'} onClick={this.numericKeyPressed.bind(this, '5')}/>
          <NumericKey label={'6'} onClick={this.numericKeyPressed.bind(this, '6')}/>
          <OperationKey label={'-'} onClick={this.operationKeyPressed.bind(this, '-')}/>
        </div>
        <div>
          <NumericKey label={'1'} onClick={this.numericKeyPressed.bind(this, '1')}/>
          <NumericKey label={'2'} onClick={this.numericKeyPressed.bind(this, '2')}/>
          <NumericKey label={'3'} onClick={this.numericKeyPressed.bind(this, '3')}/>
          <OperationKey label={'*'} onClick={this.operationKeyPressed.bind(this, '*')}/>
        </div>
        <div>
          <NumericKey label={'.'} onClick={this.numericKeyPressed.bind(this, '.')}/>
          <NumericKey label={'0'} onClick={this.numericKeyPressed.bind(this, '0')}/>
          <OperationKey label={'%'} onClick={this.operationKeyPressed.bind(this, '%')}/>
          <OperationKey label={'/'} onClick={this.operationKeyPressed.bind(this, '/')}/>
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
