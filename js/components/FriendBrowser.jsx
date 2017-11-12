'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col, Thumbnail, Modal, Button, Well} from 'react-bootstrap';
import MenuBar from './MenuBar';
import {getFriends} from '../actions/friendsActions';

class FriendBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
      ],
      showModal: false,
      friendIndex: 0
    };

    this.displayFriendProfile = this.displayFriendProfile.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentWillMount() {
    this.props.getFriends();
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  displayFriendProfile(index) {
    this.setState({
      showModal: !this.state.showModal,
      friendIndex: index,
    })
  }

  render() {
    const index = this.state.friendIndex;
    if (this.props.friends.friends.length > 0) {
    return (
        <div>
          <MenuBar>
            <Grid>
              <Row>
                {this.props.friends.friends[0].map((friend, key) => {
                  return (
                    <Col xs={6} sm={3} key={friend._id}>
                      <div className="profile-container">
                        <Thumbnail onClick={() => {this.displayFriendProfile(key);}}>
                            <h3 className="thumbnail-title">{friend.name}</h3>
                            <img className="thumbnail-pic" src={friend.profilePic} />
                        </Thumbnail>
                      </div>
                    </Col>
                    );
                })
                }
              </Row>
            </Grid>
          </MenuBar>
            <Modal
              show={this.state.showModal}
              onHide={this.toggleModal}
            >
              <Modal.Header className="modal-header">
                <Modal.Title>{`${this.props.friends.friends[0][index].name}'s Profile`}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-body">
                 <Grid>
                  <Row>
                    <Col xs={12} sm={9} md={7}>
                      <h1 className="friend-name-modal">{this.props.friends.friends[0][index].name}</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} sm={4} md={3}>
                    <img className="friend-profile-pic-modal " src={this.props.friends.friends[0][index].profilePic}></img>
                    </Col>
                    <Col xs={6} sm={5} md={4}>
                      <Well className="friend-desc-well-modal">
                        <p>{this.props.friends.friends[0][index].description}</p>
                      </Well>
                    </Col>
                  </Row>
                </Grid>
              </Modal.Body>
              <Modal.Footer className="modal-footer">
                <Button bsStyle="primary" onClick={this.toggleModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
    );
    } else {
      return <div>></div>;
    }
  }
}

function mapStateToProps(state) {
  return ({
    friends: state.friends
  });
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getFriends
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps) (FriendBrowser);
