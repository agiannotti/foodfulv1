import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { Router } from 'react-router-dom';
import history from './Context/history';
import { FoodfulProvider } from './Context/FoodfulContext';

ReactDOM.render(
  <Router history={history}>
    <FoodfulProvider>
      <App />
    </FoodfulProvider>
  </Router>,
  document.getElementById('root')
);
