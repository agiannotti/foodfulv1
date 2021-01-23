import React from 'react';
import Nav from '../Nav/Nav';
import './AddComment.css';
import { Link } from 'react-router-dom';

export default function AddComment() {
  return (
    <div>
      <Nav />
      <div>
        <form id='add_comment_form'>
          <div className='add_comment_form_css'>
            <label>Title:</label>
            <input type='text' name='title' />
            <label>Description:</label>
            <input type='text' name='title' />
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
