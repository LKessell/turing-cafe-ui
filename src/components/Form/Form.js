import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }
  render() {
    return (
      <form>
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
        />
        <input
          type='text'
          name='date'
          value={this.state.date}
          placeholder='Date (MM/DD)'
        />
        <input
          type='text'
          name='time'
          value={this.state.time}
          placeholder='Time'
        />
        <input
          type='text'
          name='number'
          value={this.state.number}
          placeholder='Number of Guests'
        />
        <button>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
