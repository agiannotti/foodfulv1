import React, { Component } from 'react';
import FoodfulContext from '../../Context/FoodfulContext';

export default class DeleteButton extends Component {
  static contextType = FoodfulContext;

  handleSubmit = (e) => {
    e.preventDefault();
    this.history.push('/locate');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Cancel</button>
      </div>
    );
  }
}
