import React, { Component } from 'react';
// import Nav from '../Nav/Nav';
import FoodfulContext from '../../Context/FoodfulContext';
import FoodfulApiService from '../../Services/FoodfulApiService';

export default class DeleteButton extends Component {
  static contextType = FoodfulContext;

  handleSubmit = (e) => {
    e.preventDefault();

    FoodfulApiService.deleteResource(this.context.resource.id);
    // this.props.history.push('/locate');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Delete</button>
      </div>
    );
  }
}
