import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './EditResource.css';
import ResourceApiService from '../../Services/foodful-api-service';
import EditResourceContext from '../../Context/EditResourceContext';

export default class EditResource extends Component {
  static contextType = EditResourceContext;

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/locate');
    const { title, content, zipcode } = e.target;

    ResourceApiService.patchResource(
      title.title.value,
      content.content.value,
      zipcode.zipcode.value
    )
      .then((res) => this.content.EditResource(res))
      .catch(this.context.setError);
  };

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
