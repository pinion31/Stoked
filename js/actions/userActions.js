'use strict';

import {EDIT_USER, ADD_USER} from '../constants/actionTypes';
//import axios from 'axios';

export const addUser = user => (
  {type: ADD_USER, payload: user}
);

export const editUser = user => (
  {type: EDIT_USER, payload: user}
);



