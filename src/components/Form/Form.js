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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='date'
          value={this.state.date}
          placeholder='Date (MM/DD)'
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='time'
          value={this.state.time}
          placeholder='Time'
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='number'
          value={this.state.number}
          placeholder='Number of Guests'
          onChange={this.handleChange}
        />
        <button>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
