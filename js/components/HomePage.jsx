'use strict';

import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

/** Landing page for Stoked**/
class HomePage extends Component {
  constructor(props) {
    super(props)

  this.login = this.login.bind(this);
  }

  login() {
    this.props.history.push('/Dashboard');
  }

  render() {
    return (
      <div>
        <h1>Stoked</h1>
        <Button onClick={this.login}>Login</Button>
      </div>

    );
  }
}

export default HomePage;
