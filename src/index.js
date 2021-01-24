import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import history from './Context/history';
import { ResourceProvider } from './Context/ResourcesContext';
import { NewResourceProvider } from './Context/NewResourceContext';

ReactDOM.render(
  <Router history={history}>
    <NewResourceProvider>
      <ResourceProvider>
        <App />
      </ResourceProvider>
    </NewResourceProvider>
  </Router>,
  document.getElementById('root')
);
