'use strict';

import {GET_FRIENDS} from '../constants/actionTypes';

export const friendsReducer = (state = {friends:[]}, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return {friends: action.payload};
    default:
      return state;
  }
};