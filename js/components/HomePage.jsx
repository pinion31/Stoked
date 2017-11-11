'use strict';

import React, {Component} from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap';

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
      <Grid>
        <Row>
          <Col xs={6} md={6} xsOffset={3} mdOffset={3}>
            <h1 className="title">Stoked</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={4} xsOffset={4} smOffset={3} className="login-button">
            <Button onClick={this.login}>Login With Gmail</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HomePage;
