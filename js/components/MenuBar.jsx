'use strict';

import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

/*Presentational Component for Nav Bar*/
const MenuBar = (props) => (
  <div>
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand><span className="menu-title" >Stoked</span></Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/Dashboard">
          <NavItem >My Profile</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="/FriendBrowser">
          <NavItem >Find Others</NavItem>
        </LinkContainer>
      </Nav>
  </Navbar>
    {props.children}
  </div>
);

export default MenuBar;
