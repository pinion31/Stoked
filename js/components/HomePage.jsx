'use strict';

import React from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap';

/** Landing page for Stoked**/
const HomePage = (props) => (
  <Grid>
    <Row className="center-element">
      <Col xs={12} md={6}>
        <h1 className="title">Stoked</h1>
        <h2 className="sub-title">A Place To Meet New Friends</h2>
      </Col>
    </Row>
    <Row className="center-element">
      <Col xs={3} sm={2} xsOffset={0}>
        <a href='/auth/twitter'> {/*starts OAuth process */}
        <Button>Login With Twitter</Button>
        </a>
      </Col>
    </Row>
  </Grid>
);

export default HomePage;
