'use strict';

import React, {Component} from 'react';
import {Row, Col, Grid, Button, Well, HelpBlock, Modal, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editUser, getUser} from '../actions/userActions';
import MenuBar from './MenuBar';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal:false,
      editedUser: {
        user:'',
        description:'',
        profilePic: this.props.user.user.profilePic
      }
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.sendProfileEdit = this.sendProfileEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
  }

  componentDidMount() {
    this.props.getUser();
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

  onChangeImage() {
    var file = this.refs.file.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    const editedUser = Object.assign({}, this.state.editedUser);

    reader.onloadend = (e) => {
    editedUser.profilePic = [reader.result];
     this.setState({
      editedUser,
     });
    };
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
        <MenuBar>
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
                <Well className='profile-name-well picture-well'>
                  <img className="profile-pic" src={this.props.user.user.profilePic} />
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
                  <Col xs={6} sm={4} md={3}>
                  <img className="profile-pic-modal" src={this.state.editedUser.profilePic}></img>
                  </Col>
                  <Col xs={6} sm={5} md={4}>
                    <FormGroup>
                      <ControlLabel>About Me</ControlLabel>
                      <FormControl
                        componentClass="textarea"
                        name="description"
                        type="textarea"
                        onChange={this.handleChange}
                      />
                      <HelpBlock></HelpBlock>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                 <form>
                    <input
                      ref="file"
                      type="file"
                      name="profilePic"
                      multiple="false"
                      onChange={this.onChangeImage}
                      className="upload-new-pic-button" />
                  </form>
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
      </MenuBar>
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
    getUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (Profile);