'use strict';

import React, {Component} from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1> Chris Cantu </h1>
        <img src='https://images.igdb.com/igdb/image/upload/t_cover_small/ok5aq7j375uaxp59zr2g.jpg' />
        <h2> About me: I am cool </h2>
      </div>
    );
  }

}

export default Profile;