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
        <Row className="center-element">
          <Col xs={6} md={6}>
            <h1 className="title">Stoked</h1>
            <h2 className="sub-title">A Place To Meet New Friends</h2>
          </Col>
        </Row>
        <Row className="center-element">
          <Col xs={2} sm={2}>
            <a href='/auth/twitter'>
            <Button>Login With Twitter</Button>
            </a>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HomePage;
