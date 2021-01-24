import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './AddResource.css';
import { Link } from 'react-router-dom';
import NewResourceContext from '../../Context/NewResourceContext';
import ResourceApiService from '../../Services/foodful-api-service';

export default class AddResource extends Component {
  static contextType = NewResourceContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, zipcode, content } = e.target;

    ResourceApiService.postNewResource(
      title.title.value,
      zipcode.zipcode.value,
      content.content.value
    )
      .then((res) => this.context.setResource(res))
      .catch(this.context.setError);
  };

  render() {
    return (
      <div>
        <Nav />
        <div>
          <form id='add_resource_form' onSubmit={this.handleSubmit}>
            <div className='add_resource_form_css'>
              <label>Title:</label>
              <input type='text' name='title' value={this.context.title} />
              <label>Description:</label>
              <input type='text' name='title' value={this.context.zipcode} />
              <label>Zipcode:</label>
              <input type='select' name='title' value={this.context.content} />
              <Link to='/locate'>
                <button className='Add_Submit_Button' type='submit'>
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
