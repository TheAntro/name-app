import { SET_NAMES, CLEAR_NAMES } from '../actions/types';

const initialState = [];

function namesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case SET_NAMES:
      return payload;
    case CLEAR_NAMES:
      return [];
    default:
      return state;
  }
}

export default namesReducer;