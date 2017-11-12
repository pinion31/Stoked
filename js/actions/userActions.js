'use strict';

import axios from 'axios';
import {EDIT_USER, ADD_USER} from '../constants/actionTypes';

export const addUser = user => (
  (dispatch) => {
    axios.post('/user/addUser', user)
      .then((res) => {
        dispatch({type: ADD_USER, payload: res.data});
      }).catch((err) => {
        throw err;
      });
  }
);

export const editUser = user => (
  (dispatch) => {
    axios.post('/user/editUser', user)
      .then((res) => {
        dispatch({type: EDIT_USER, payload: res.data});
      }).catch((err) => {
        throw err;
      });
  }
);




