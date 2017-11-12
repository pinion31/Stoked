'use strict';

import axios from 'axios';
import {GET_FRIENDS} from '../constants/actionTypes';

export const getFriends = () => (
  (dispatch) => {
    axios.get('/user/getAllUsers')
      .then((res) => {
        dispatch({type: GET_FRIENDS, payload: res.data});
      }).catch((err) => {
        throw err;
      });
  }
);