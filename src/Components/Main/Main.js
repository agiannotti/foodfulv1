import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import placeholder from '../../Images/Convention-logo.png';
import Nav from '../Nav/Nav';

export default function Main() {
  return (
    <div className='border-main'>
      <header className='tiny__header'></header>
      <section className='App-header'>
        <Nav />
      </section>
      <section className='main-section'>
        <div>
          <h1>
            <img
              className='logo-main'
              src={placeholder}
              alt='placeholder'
              width='176px'
              height='161px'
            />
          </h1>
        </div>
        <h1>Foodful</h1>
        <div className='main-paragraph'>
          <p>Locate free food, or provide a bit of your own.</p>
        </div>
        <div>
          <Link to='/locate'>
            <button className='main-search'>Search</button>
          </Link>
        </div>
      </section>
      <br />
      {/* <footer className='tiny__footer'>&#169; AGiannotti 2021</footer> */}
    </div>
  );
}
