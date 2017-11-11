'use strict';

import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const MenuBar = (props) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand><span>Stoked</span></Navbar.Brand>
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
