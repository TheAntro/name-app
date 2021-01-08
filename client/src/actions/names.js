import { SET_NAMES, CLEAR_NAMES} from './types';

export const setNames = (names) => dispatch => {
  dispatch({ type: CLEAR_NAMES });
  dispatch({
    type: SET_NAMES,
    payload: names
  });
}