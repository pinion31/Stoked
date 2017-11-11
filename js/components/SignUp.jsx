'use strict';

import React, {Component} from 'react';
import {Row, Col, Grid, FormGroup, FormControl, Button, HelpBlock} from 'react-bootstrap';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  handleChange() {


  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={8} md={8}>
            <h1> Hi! You are new here! Let's create an profile.</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={8} md={8}>
            <FormGroup>
              <FormControl
                name="name"
                type="text"
                placeholder="name"
                onChange={this.handleChange}
              />
              <HelpBlock></HelpBlock>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={4}>
            <img src="https://images.igdb.com/igdb/image/upload/t_screenshot_med/jdnrusuxcocq1ojac1yj.jpg"></img>
            <Button>Upload Profile Picture</Button>
          </Col>
          <Col xs={4} md={4}>
            <FormGroup>
              <FormControl
                name="description"
                type="text"
                placeholder="About Me"
                onChange={this.handleChange}
              />
              <HelpBlock></HelpBlock>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Button>Create Profile</Button>
        </Row>
      </Grid>

    );
  }
}

export default SignUp;
