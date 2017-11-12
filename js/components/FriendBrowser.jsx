'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import MenuBar from './MenuBar';
import {getFriends} from '../actions/friendsActions';

class FriendBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
      ]
    };
  }

  componentWillMount() {
    this.props.getFriends();
  }

  render() {
    if (this.props.friends.friends.length > 0) {
    return (
        <Grid>
          <Row>
              {this.props.friends.friends[0].map((friend) => {
                return (
                  <Col xs={6} sm={3} key={friend._id}>
                    <div className="profile-container">
                      <a>
                        <Thumbnail>
                          <h3>{friend.name}</h3>
                          <img src='https://images.igdb.com/igdb/image/upload/t_cover_small/ok5aq7j375uaxp59zr2g.jpg' />
                        </Thumbnail>
                      </a>
                    </div>
                  </Col>
                  );
              })
              }
          </Row>
        </Grid>
    );
    } else {
      return <div><h1>No users</h1></div>;
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
