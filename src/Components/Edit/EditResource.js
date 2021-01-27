import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './EditResource.css';
import FoodfulContext from '../../Context/FoodfulContext';
import ResourceApiService from '../../Services/FoodfulApiService';

export default class EditResource extends Component {
  static contextType = FoodfulContext;

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/locate');
    const { title, content, zipcode } = e.target;
    ResourceApiService.patchResource(
      title.title.value,
      content.content.value,
      zipcode.zipcode.value
    )
      .then((res) => this.content.editResource(res))
      .catch(this.context.setError);
  };

  editResource;

  handleClickCancel = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Nav />
        <div>
          <form id='edit_resource_form'>
            <div className='edit_resource_form_css'>
              <label>Title:</label>
              <input type='text' name='title' />
              <label>Description:</label>
              <input type='text' name='title' />
              <label>Zipcode:</label>
              <input type='select' name='title' />
              <button
                onSubmit={this.handleSubmit}
                className='Edit_Submit_Button'
                type='submit'
              >
                Save Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
