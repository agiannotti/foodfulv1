import React, { Component } from 'react';
import './ResourceList.css';
import { Link } from 'react-router-dom';

export default class ResourceList extends Component {
  render() {
    const { resource } = this.props;

    return (
      <div className='Resource__details'>
        <h2 className='Resource__heading'>{resource.title}</h2>
        <div className='Resource__desc'>
          <p className='Resource__item'>{resource.content}</p>
          <p className='Resource__item'>{resource.zipcode}</p>
          <p className='Resource__item'>{resource.date_published}</p>
          <Link to='/comment'>
            <button className='Add_Comment_Button' type='submit'>
              Add Comment
            </button>
          </Link>
          <Link to='/edit'>
            <button className='Edit_Details_Button' type='submit'>
              Edit Details
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
