import React from 'react';
import { Route, Router } from 'react-router-dom';
import './App.css';
import history from '../../Context/history';
import Main from '../Main/Main';
import Mission from '../Mission/Mission';
import Locate from '../Foodful/LocatePage';
import Help from '../Help/Help';
import AddResource from '../Add/AddResource';
import AddComment from '../Add/AddComment';
import EditResource from '../Edit/EditResource';
import DeleteButton from '../Utilities/DeleteButton';
import CancelButton from '../Utilities/CancelButton';
import NavBar from '../Nav/NavBar';

// import PrivateRoute from './Components/Utilities/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Route exact path='/' component={Main} />
        <Route exact path='/mission' component={Mission} />
        <Route exact path='/locate' component={Locate} />
        <Route exact path='/help' component={Help} />
        <Route exact path='/add' component={AddResource} />
        <Route exact path='/comment' component={AddComment} />
        <Route exact path='/edit' component={EditResource} />
        <Route exact path='/delete' component={DeleteButton} />
        <Route exact path='/cancel' component={CancelButton} />
        <Route exact path='/NavBar' component={NavBar} />
      </Router>
    </div>
  );
}

export default App;
