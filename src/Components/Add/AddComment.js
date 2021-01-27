import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './AddComment.css';
import FoodfulContext from '../../Context/FoodfulContext';
import FoodfulApiService from '../../Services/FoodfulApiService';

export default class AddComment extends Component {
  static contextType = FoodfulContext;

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    // const modified = new Date().toISOString();
    this.props.history.push('/locate');

    FoodfulApiService.postNewComment(e.target.content.value)
      .then((res) => this.context.setComment(res))

      .catch(this.context.setError);
  };

  render() {
    return (
      <div>
        <Nav />
        <div>
          <form id='add_comment_form' onSubmit={this.handleSubmit}>
            <div className='add_comment_form_css'>
              <label>Comment:</label>
              <input
                type='text'
                name='comment'
                value={this.context.comment}
                required
              />
              <button className='Comment_Submit_Button' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
