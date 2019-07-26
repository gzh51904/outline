import {combineReducers} from 'redux';

import cart from './cart';
import common from './common';
import user from './user';

export default combineReducers({cart,common,user})