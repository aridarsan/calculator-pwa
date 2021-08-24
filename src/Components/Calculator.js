import React, { Component } from "react";
import "../Styles/style.css"

class Calculator extends Component {
  state = {
    count: "0",
  };

  Reset() {
    this.setState({
      count: "0",
    });
  }

  changeValue(digit) {
    const { count } = this.state;
    this.setState({
      count: count === "0" ? String(digit) : count + digit,
    });
  }

  Calculate(digit) {
    const { count } = this.state;
    this.setState({
      // eslint-disable-next-line no-eval
      count: eval(count),
    });
  }

  render() {
    return (
      <div className="container-calc">
        <div className="calculator">
          <h1>Ngetang</h1>
          <div className="display">
            <div className="display-calc">
              <h1 className="disp">{this.state.count}</h1>
            </div>
          </div>
          <div className="keyboard">
            <div className="row">
              <button onClick={() => this.changeValue(7)}>7</button>
              <button onClick={() => this.changeValue(8)}>8</button>
              <button onClick={() => this.changeValue(9)}>9</button>
              <button onClick={() => this.changeValue("+")}  className="operator">+</button>
            </div>
            <div className="row">
              <button onClick={() => this.changeValue(4)}>4</button>
              <button onClick={() => this.changeValue(5)}>5</button>
              <button onClick={() => this.changeValue(6)}>6</button>
              <button onClick={() => this.changeValue("-")} className="operator">-</button>
            </div>
            <div className="row">
              <button onClick={() => this.changeValue(1)}>1</button>
              <button onClick={() => this.changeValue(2)}>2</button>
              <button onClick={() => this.changeValue(3)}>3</button>
              <button onClick={() => this.changeValue("*")} className="operator"> *</button>
            </div>
            <div className="row">
              <button onClick={() => this.Reset()} className="operator">C</button>
              <button onClick={() => this.changeValue(0)}>0</button>
              <button onClick={() => this.changeValue("/")} className="operator">/</button>
              <button className="calculate operator" onClick={() => this.Calculate()}>
                =
              </button>
            </div>
          </div>
       </div>
      </div>
    );
  }
}

export default Calculator;