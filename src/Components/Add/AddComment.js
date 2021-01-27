import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './AddComment.css';
import { Link } from 'react-router-dom';
import NewResourceContext from '../../Context/NewResourceContext';
import CommentApiService from '../../Services/comment-api-service';

export default class AddComment extends Component {
  static contextType = NewResourceContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const modified = new Date().toISOString();

    CommentApiService.postNewComment(e.target.content.value)
      .then((res) => this.context.setComment(res))

      .catch(this.context.setError);
    this.props.history.push('/locate');
  };

  render() {
    return (
      <div>
        <Nav />
        <div>
          <form id='add_comment_form' onSubmit={this.handleSubmit}>
            <div className='add_comment_form_css'>
              <label>Comment:</label>
              <input type='text' name='comment' value={this.context.comment} />
              <Link to='/locate'>
                <button className='Comment_Submit_Button' type='submit'>
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
