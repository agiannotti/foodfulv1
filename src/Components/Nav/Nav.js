import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
// import menu from '../../Images/Burger.png';

export default function Nav() {
  return (
    <div className='full-nav'>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/mission'>Mission</Link>
        <Link to='/locate'>Locate</Link>
        <Link to='/help'>Help</Link>
      </div>
    </div>
  );
}
