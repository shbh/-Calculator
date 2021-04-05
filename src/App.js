import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Key from './component/Key'
import Result from './component/Result';

class App extends React.Component {

  state = {
    result: ''
  }


  onClick = button => {
    if (button === "=") {
      this.calculate();

    }
    else if (button === "C") {
      this.reset();

    }
    else if (button === "CE") {

      this.backspace();

    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }

  };
  calculate = () => {
    let checkResult = ''
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')

    } else {
      checkResult = this.state.result

    }
    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }

  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };


  render() {
    return (
      <div className="calculator-body">
        <h1>Simple Calculator</h1>
        <Result result={this.state.result} />
        <Key onClick={this.onClick} />
      </div>
    )
  }
}



export default App;
