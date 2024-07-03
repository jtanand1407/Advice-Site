import React, { Component } from "react";
import axios from "axios";
import './App.css';

export default class App extends Component {
  state = {"advice": "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const advice = response.data.slip.advice;
        this.setState({advice});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return <div className="App">
      <div className='Card'>
        <div className='CardTitle'><h1>{this.state.advice}</h1></div>
        <div className='CardButton'><button className='Button' onClick={()=> this.fetchAdvice()}>
          <h2>Click Me</h2></button></div>
      </div>
    </div>;
  }
}
