import React from 'react';
import Nav from '../Nav/Nav';
import './EditResource.css';
import { Link } from 'react-router-dom';

export default function EditResource() {
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
            <Link to='/locate'>
              <button className='Edit_Submit_Button' type='submit'>
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
