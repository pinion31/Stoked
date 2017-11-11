'use strict';

import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {friendsReducer} from './friendsReducer';

export default combineReducers({user: userReducer, friends: friendsReducer});