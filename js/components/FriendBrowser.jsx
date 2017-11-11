'use strict';

import React, {Component} from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import MenuBar from './MenuBar';

class FriendBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendCards: [
        {name: 'chris',description:'Hello'},
        {name:'Nicole', description: 'I am drunk'},
        {name: 'chris',description:'Hello'},
        {name:'Nicole', description: 'I am drunk'},
        {name: 'chris',description:'Hello'},
        {name:'Nicole', description: 'I am drunk'},
        {name: 'chris',description:'Hello'},
        {name:'Nicole', description: 'I am drunk'}
      ]
    };
  }

  render() {
    return (
        <Grid>
          <Row>
              {this.state.friendCards.map((card,key) => { //key is temporary
                return (
                  <Col xs={6} sm={3}>
                    <div className="profile-container">
                      <a>
                        <Thumbnail key={key}>
                          <h3>{card.name}</h3>
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
  }
}

export default FriendBrowser;
