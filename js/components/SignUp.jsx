'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser} from '../actions/userActions';
import MenuBar from './MenuBar';
import {Row, Col, Grid, FormGroup, FormControl, FieldGroup, Button, HelpBlock, ControlLabel, Well} from 'react-bootstrap';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: '',
        description: '',
        profileId: this.props.location.search.slice(1),
        profilePic: ''
      },
      picture: ''
    };

    this.sendUserInfo = this.sendUserInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
  }

  handleChange(e) {
    const user = Object.assign({}, this.state.newUser);

    user[e.target.name] = e.target.value;

    this.setState({
      newUser: user
    });
  }

  onChangeImage() {
    var file = this.refs.file.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    const newUser = Object.assign({}, this.state.newUser);

    reader.onloadend = (e) => {
    newUser.profilePic = [reader.result];
     this.setState({
      newUser,
     });
    };
  }

  sendUserInfo() {
    this.props.addUser(this.state.newUser, () => {
      this.props.history.push('/Dashboard');
    });
  }

  render() {
    return (
      <div>
          <Grid>
            <Row>
              <Col xs={8} xsOffset={2} sm={8} smOffset={2}>
                <Well className="greeting-well">
                  <h1> Hi! You Are New Here!</h1>
                  <h1> Let's Create A Profile. </h1>
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
                    placeholder="Your Profile Name"
                    onChange={this.handleChange}
                  />
                  <HelpBlock></HelpBlock>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={3} xsOffset={3} sm={3} smOffset={3}>
                <Row className="center-element">
                  <img className="profile-pic" src={this.state.newUser.profilePic} />
                </Row>
                <Row className="center-element upload-pic-button">
                  <form>
                    <input
                      ref="file"
                      type="file"
                      name="profilePic"
                      multiple="false"
                      onChange={this.onChangeImage} />
                  </form>
                </Row>
              </Col>
              <Col xs={4} xsOffset={0} sm={4} smOffset={0}>
                <FormGroup>
                  <ControlLabel>About Me</ControlLabel>
                  <FormControl
                    componentClass="textarea"
                    className ="description"
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
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addUser
  }, dispatch);
}
export default connect(null, mapDispatchToProps) (SignUp);
