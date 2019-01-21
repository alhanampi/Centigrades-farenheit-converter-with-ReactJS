import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
//cent is centigrade, fare is farenheit
    this.state = {
      cent: '',
      fare: ''
    }
    this.handleCent = this.handleCent.bind(this)
    this.handleFare = this.handleFare.bind(this)
  }

  handleCent(e) {
    //making sure the amount is a number
    let centPars = parseInt(e.target.value)
  
    this.setState({
      
      cent: e.target.value, //saves the value
      fare: (1.8 * centPars) + 32
      
    })
  }

   handleFare(e) {
     let farePars = parseInt(e.target.value)
     this.setState({
       fare: e.target.value,
       cent: (5/9) * (farePars - 32)
     })
   }

  render() {
    return (
      <div>
<h1 class="titleText"> Centigrades/farenheit automatic conversion </h1>
        <input type="number" placeholder="centigrados" value={this.state.cent} onChange={this.handleCent}></input>
        <span> = </span>
        <input type="number" placeholder="farenheit" value={this.state.fare} onChange={this.handleFare}></input>
      </div>
    )
  }
}

export default App;
