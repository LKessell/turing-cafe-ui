import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  fetchData = async (endpoint) => {
    let response = await fetch(`http://localhost:3001/api/v1/reservations${endpoint}`);

    if (!response.ok) {
      console.error(response.message)
    }

    let data = await response.json();

    return data;
  }

  async componentDidMount () {
    let fetchedData = await this.fetchData('');

    this.setState({ reservations: fetchedData });
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <Reservations reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
