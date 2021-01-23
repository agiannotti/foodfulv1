import React from 'react';
import Nav from '../Nav/Nav';
import './AddResource.css';
import { Link } from 'react-router-dom';

export default function AddResource() {
  return (
    <div>
      <Nav />
      <div>
        <form id='add_resource_form'>
          <div>
            <div className='add_resource_form_css'>
              <label>Title:</label>
              <input type='text' name='title' />
              <label>Description:</label>
              <input type='text' name='title' />
              <label>Zipcode:</label>
              <input type='select' name='title' />
              <Link to='/locate'>
                <button className='Add_Submit_Button' type='submit'>
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
