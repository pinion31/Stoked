'use strict';

import React, {Component} from 'react';
import {Row, Col, Grid, Button, Well, HelpBlock, Modal, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editUser} from '../actions/userActions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal:false,
      editedUser: {
        user:'',
        description:'',
        email: 'gmail',
        profilePic: 'empty'
      }
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.sendProfileEdit = this.sendProfileEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  sendProfileEdit() {
    this.props.editUser(this.state.editedUser);
    this.toggleModal();
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  handleChange(e) {
    const user = Object.assign({}, this.state.editedUser);

    user[e.target.name] = e.target.value;

    this.setState({
      editedUser: user
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={8} xsOffset={2} sm={8} smOffset={2}>
              <Well className='profile-name-well'>
                <Button
                  className="edit-profile-button"
                  onClick={this.toggleModal}
                > Edit Profile
                </Button>
                <h1 className="profile-name">{this.props.user.user.name}</h1>
              </Well>
            </Col>
          </Row>
          <Row>
            <Col xs={4} xsOffset={2} sm={4} smOffset={2}>
              <Well className='profile-name-well'>
                <img className="profile-pic" src='https://images.igdb.com/igdb/image/upload/t_cover_small/ok5aq7j375uaxp59zr2g.jpg' />
              </Well>
            </Col>
            <Col xs={4} sm={4} className="profile-description">
              <Well className='profile-name-well'>
                <h2> About Me</h2>
                <p> {this.props.user.user.description} </p>
              </Well>
            </Col>
          </Row>
        </Grid>
        <Modal
            show={this.state.showModal}
            onHide={this.toggleModal}
        >
          <Modal.Header className="modal-header">
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <Grid>
              <Row>
                <Col xs={12} sm={9} md={7}>
                  <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                      name="name"
                      type="text"
                      onChange={this.handleChange}
                    />
                    <HelpBlock></HelpBlock>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <img src="https://images.igdb.com/igdb/image/upload/t_cover_small/ok5aq7j375uaxp59zr2g.jpg"></img>
              </Row>
              <Row>
                <Button>Upload New Profile Picture</Button>
              </Row>
              <Row>
                <Col xs={12} sm={9} md={7}>
                  <FormGroup>
                    <ControlLabel>About Me</ControlLabel>
                    <FormControl
                      componentClass="textarea"
                      name="description"
                      type="textarea"
                      value={this.props.user.description}
                      placeholder={this.props.user.description}
                      onChange={this.handleChange}
                    />
                    <HelpBlock></HelpBlock>
                  </FormGroup>
                </Col>
              </Row>
            </Grid>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button bsStyle="primary" onClick={this.toggleModal}>
              Close
            </Button>
            <Button
              className=""
              onClick={this.sendProfileEdit}
            >
              Finish Editing
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    editUser,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (Profile);