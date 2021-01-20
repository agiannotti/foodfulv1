import React from 'react';
import '../Main/Main.css';
import './Resources.css';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

export default function Resources() {
  return (
    <div>
      <Nav />
      <div className='Resource__main'>
        <h2>Sort</h2>
        <div>
          <form className='resourceTypeForm'>
            <label>Card Type</label>
            <div>
              <input type='radio' name='shelter'></input>
              <label htmlFor='FoodBank'>Food Bank</label>
            </div>
            <div>
              <input type='radio' name='shelter'></input>
              <label htmlFor='DropPoint'>Food Drive</label>
            </div>
            <div>
              <input type='radio' name='shelter'></input>
              <label htmlFor='FoodBank'>Parks</label>
            </div>
            <div>
              <input type='radio' name='shelter'></input>
              <label htmlFor='dropPoint'>Custom</label>
            </div>
          </form>
        </div>
        <div>
          <label className='Zipcode'>Zip Code</label>
        </div>
        <div className='AddDrop'>
          <Link to='/create'>Add Resource Location</Link>
        </div>
      </div>
    </div>
  );
}
