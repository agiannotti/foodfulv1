import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import './EditResource.css';
import FoodfulContext from '../../Context/FoodfulContext';
import FoodfulApiService from '../../Services/FoodfulApiService';
// import DeleteButton from '../Utilities/DeleteButton';

export default class EditResource extends Component {
  static contextType = FoodfulContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, content, zipcode } = e.target;
    FoodfulApiService.patchResource(
      title.title.value,
      content.content.value,
      zipcode.zipcode.value
    )
      .then((res) => this.content.editResource(res))
      .catch(this.context.setError);
  };

  handleClickCancel = () => {
    this.props.history.push('/');
  };

  render() {
    const { resource } = this.props;
    console.log('resource', resource);
    return (
      <div>
        <NavBar />
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
              {/* <DeleteButton resource={resource} /> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
