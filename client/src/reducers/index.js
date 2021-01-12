import { combineReducers } from 'redux';
import alert from './alert';
import names from './names';
import total from './total';

export default combineReducers({ alert, names, total });