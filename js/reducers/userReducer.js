'use strict';

import {ADD_USER, EDIT_USER} from '../constants/actionTypes';

export const userReducer = (state = {user:{}}, action) => {
  switch (action.type) {
    case ADD_USER:
      return {user: Object.assign({},action.payload)};
    case EDIT_USER:
      return {user: Object.assign({}, action.payload)};
    default:
      return state;
  }
};



