'use strict';

import React from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router';

/*
const Menu = () => (

);*/

const Main = () => (
  <div>
    <h1> Hello 1 </h1>
  </div>
);

/*
const Dashboard = () => (
  <div>

  </div>
);*/


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </div>
);

export default App;
