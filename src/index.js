import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import history from './Context/history';
import { ResourceProvider } from './Context/ResourcesContext';

ReactDOM.render(
  <Router history={history}>
    <ResourceProvider>
      <App />
    </ResourceProvider>
  </Router>,
  document.getElementById('root')
);
