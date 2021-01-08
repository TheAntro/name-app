import { combineReducers } from 'redux';
import alert from './alert';
import names from './names'

export default combineReducers({ alert, names });