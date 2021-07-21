import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }
  render() {
    return (
      <form>
      </form>
    )
  }
}

export default Form;
