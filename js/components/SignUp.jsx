'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser} from '../actions/userActions';
import {Row, Col, Grid, FormGroup, FormControl, Button, HelpBlock, ControlLabel, Well} from 'react-bootstrap';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: '',
        description: '',
        profileId: this.props.location.search.slice(1),
        profilePic: 'empty'
      }
    };

    this.sendUserInfo = this.sendUserInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const user = Object.assign({}, this.state.newUser);

    user[e.target.name] = e.target.value;

    this.setState({
      newUser: user
    });
  }

  sendUserInfo() {
    this.props.addUser(this.state.newUser);
    this.props.history.push('/Dashboard'); //temporary
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={8} xsOffset={2} sm={8} smOffset={2}>
            <Well className="greeting-well">
              <h1> Hi! You are new here! Let's create an profile.</h1>
            </Well>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2} sm={8} smOffset={2}>
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl
                name="name"
                type="text"
                placeholder="Your Name"
                onChange={this.handleChange}
              />
              <HelpBlock></HelpBlock>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={4} xsOffset={2} sm={4} smOffset={2}>
            <Row className="center-element">
              <img src="https://images.igdb.com/igdb/image/upload/t_cover_small/ok5aq7j375uaxp59zr2g.jpg"></img>
            </Row>
            <Row className="center-element upload-pic">
              <Button>Upload Profile Picture</Button>
            </Row>

          </Col>
          <Col xs={4} xsOffset={0} sm={4} smOffset={0}>
            <FormGroup>
              <ControlLabel>About Me</ControlLabel>
              <FormControl
                componentClass="textarea"
                name="description"
                type="textarea"
                placeholder="Tell us about yourself"
                onChange={this.handleChange}
              />
              <HelpBlock></HelpBlock>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2} sm={8} smOffset={2}>
            <Button
              className="create-profile-button"
              onClick={this.sendUserInfo}
            > Create Profile
            </Button>
          </Col>
        </Row>
      </Grid>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addUser
  }, dispatch);
}
export default connect(null, mapDispatchToProps) (SignUp);
