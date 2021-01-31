import React, { Component } from 'react';
// import Nav from '../Nav/Nav';
import FoodfulContext from '../../Context/FoodfulContext';
import FoodfulApiService from '../../Services/FoodfulApiService';

export default class DeleteButton extends Component {
  static contextType = FoodfulContext;

  handleDelete = (id) => {
    const { removeFromResourceList } = this.context;
    // console.log('props', this.props);
    // this.props.history.push('/locate');

    FoodfulApiService.deleteById(id)
      .then((res) => {
        removeFromResourceList(id);
      })
      .catch(this.context.setError);
    // console.log('render console', this.context.resourceList);
  };

  render() {
    const { resource } = this.props;
    return (
      <div>
        <button onClick={() => this.handleDelete(resource.id)}>Delete</button>
      </div>
    );
  }
}
