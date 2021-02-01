import React, { Component } from 'react';
import '../Main/Main.css';
import './LocatePage.css';
import NavBar from '../Nav/NavBar';
import FoodfulContext from '../../Context/FoodfulContext';
import FoodfulApiService from '../../Services/FoodfulApiService';
import ResourceList from './ResourceList';
import { Link } from 'react-router-dom';

export default class LocatePage extends Component {
  static contextType = FoodfulContext;

  componentDidMount() {
    this.context.clearError();
    FoodfulApiService.getResources()
      .then((res) => this.context.setResourceList(res))
      .catch(this.context.setError);
  }

  renderResource() {
    const { resourceList = [] } = this.context;
    return resourceList.map((resource) => (
      <ResourceList key={resource.id} resource={resource} />
    ));
  }

  render() {
    const { error } = this.context;

    return (
      <div>
        <NavBar />
        <div className='Resource__main'>
          <div className='Resource__header'>
            <div>
              <h2>Available Resources</h2>
              <form className='Resource__radio'>
                <label>Location Type</label>
                <div>
                  <select>
                    <option value='item-1'></option>
                    <option value='item-2'>Food Drive</option>
                    <option value='item-3'>Public Park</option>
                    <option value='item-3'>Shelter</option>
                    <option value='item-3'>Custom</option>
                  </select>
                </div>
              </form>
            </div>
            <div>
              <label className='Zipcode'>Zip Code</label>
            </div>
            <div className='add_button'>
              <Link to='/add'>
                <button type='button'>Add Location</button>
              </Link>
            </div>
          </div>
          <div className='List_Container'>
            {error ? <p className='angry'>Error</p> : this.renderResource()}
          </div>
        </div>
      </div>
    );
  }
}
