import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <Reservations />
      </div>
    )
  }
}

export default App;
