import React, { Component } from 'react';
import FoodfulContext from '../../Context/FoodfulContext';
import FoodfulApiService from '../../Services/FoodfulApiService';

export default class EditButton extends Component {
  static contextType = FoodfulContext;

  handleEdit = (id) => {
    const { resource } = this.props;
  };
  render() {
    return <div />;
  }
}
