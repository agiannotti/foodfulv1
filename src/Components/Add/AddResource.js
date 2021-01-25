import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './AddResource.css';
import NewResourceContext from '../../Context/NewResourceContext';
import ResourceApiService from '../../Services/foodful-api-service';

export default class AddResource extends Component {
  static contextType = NewResourceContext;

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/locate');

    ResourceApiService.postNewResource(
      e.target.title.value,
      e.target.content.value,
      e.target.zipcode.value
    )
      .then((res) => this.context.setResource(res))

      .catch(this.context.setError);
  };

  render() {
    return (
      <div>
        <Nav />
        <div>
          <form className='add_resource_form' onSubmit={this.handleSubmit}>
            <div className='add_resource_form_css'>
              <label htmlFor='title'>Title:</label>
              <input
                type='text'
                name='title'
                value={this.context.title}
                required
              />
              <label htmlFor='content'>Description:</label>
              <input type='text' name='content' value={this.context.content} />
              <label htmlFor='zipcode'>Zipcode:</label>
              <input
                type='select'
                name='zipcode'
                value={this.context.zipcode}
              />
              <button type='submit' className='Add_Submit_Button'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
