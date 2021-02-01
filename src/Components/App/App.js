import React from 'react';
import { Route, Router } from 'react-router-dom';
import './App.css';
import history from '../../Context/history';
import Main from '../Main/Main';
import Mission from '../Mission/Mission';
import Locate from '../Foodful/LocatePage';
import Contact from '../Contact/Contact';
import AddResource from '../Add/AddResource';
import EditResource from '../Edit/EditResource';

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Route exact path='/' component={Main} />
        <Route exact path='/mission' component={Mission} />
        <Route exact path='/locate' component={Locate} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/add' component={AddResource} />
        <Route exact path='/edit' component={EditResource} />
      </Router>
    </div>
  );
}

export default App;
