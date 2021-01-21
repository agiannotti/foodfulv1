import React, { Component } from 'react';
import '../Main/Main.css';
import './Resources.css';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import { ResourceContext } from '../../Context/ResourcesContext';

export default class Resources extends Component {
  static contextType = ResourceContext;
  render() {
    console.log('resource', this.context.resource);
    const resource = this.context.resource;

    return (
      <div>
        <Nav />
        <div className='Resource__main'>
          <h2>Sort</h2>
          <div>
            <form className='Resource__radio'>
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
                <label htmlFor='PublicParks'>PublicParks</label>
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
          <div className='Resource__details'>
            <h2 className='Resource__heading'>{resource.title}</h2>
            <ul className='Resource__desc'>
              <li className='Resource__item'>{resource.content}</li>
              <li className='Resource__item'>{resource.zipcode}</li>
              <li className='Resource__item'>{resource.date_published}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
