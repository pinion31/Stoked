'use strict';

import React from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import FriendBrowser from './FriendBrowser';
import MenuBar from './MenuBar';
import SignUp from './SignUp';

const Footer = () => (
  <div className="footer-style">
    <p>Copyright &copy; 2017 Chris Cantu. All Rights Reserved</p>
  </div>
);

const App = () => (
  <div>
    <MenuBar>
      <Switch>
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/FriendBrowser" component={FriendBrowser} />
        <Route exact path="/SignUp" component={SignUp} />
      </Switch>
    </MenuBar>
    <Footer />
  </div>
);

export default App;
