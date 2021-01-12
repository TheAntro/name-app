import { SET_TOTAL, CLEAR_TOTAL } from '../actions/types';

const initialState = 0;

function totalReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case SET_TOTAL:
      return payload;
    case CLEAR_TOTAL:
      return 0;
    default:
      return state;
  }
}

export default totalReducer;