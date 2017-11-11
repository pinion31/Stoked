'use strict';

import React, {Component} from 'react';
import {Row, Col, Grid, Button, Well} from 'react-bootstrap';


class Profile extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={8} xsOffset={2} sm={8} smOffset={2}>
            <Well className='profile-name-well'>
              <Button className="edit-profile-button">Edit Profile</Button>
              <h1 className="profile-name"> Chris Cantu </h1>
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
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas posuere turpis quis dictum dignissim. Vivamus ut libero
                  nec quam varius tristique a non arcu. Vivamus nec odio id augue
                  fermentum porttitor. Duis mattis mauris suscipit ornare hendrerit.
                  Maecenas vel urna dolor. Praesent rutrum, neque vitae eleifend eleifend,
                   lectus lectus tristique justo, et lacinia massa libero eget ligula.
                   Mauris eget iaculis leo. Nam tempor gravida risus, a pellentesque ipsum
                   iaculis quis. In quis imperdiet orci, ut dignissim turpis. Interdum et
                   malesuada fames ac ante ipsum primis in faucibus. Integer faucibus diam et
                   ex vestibulum feugiat. Suspendisse tincidunt eu nisi quis ultricies. Nulla in
                   semper purus, vitae iaculis nunc. Nulla ipsum sem, faucibus id tempus ut,
                   interdum vel mauris. Integer bibendum imperdiet diam, vel malesuada enim
                    vehicula quis.
              </p>
            </Well>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default Profile;