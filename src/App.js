import React from 'react';
import { Route, Router } from 'react-router-dom';
import './App.css';
import history from './Context/history';

import Main from './Components/Main/Main';
import Mission from './Components/Mission/Mission';
import Locate from './Components/Foodful/LocatePage';
import Help from './Components/Help/Help';
import AddResource from './Components/Add/AddResource';
import AddComment from './Components/Add/AddComment';
import EditResource from './Components/Edit/EditResource';

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
      </Router>
    </div>
  );
}

export default App;
