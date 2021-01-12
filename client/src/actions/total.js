import axios from 'axios';
import { setAlert } from './alert';
import { SET_TOTAL, CLEAR_TOTAL} from './types';

export const setTotal = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    let fullQuery = `http://localhost:5000/names?count=total`;
    const res = await axios.get(fullQuery, config)
    const total = res.data.total;
    dispatch({
      type: SET_TOTAL,
      payload: total
    });
  }
  catch (err) {
    console.error(err.response);
    dispatch(setAlert('Virhe haussa', 'danger'));
    return;
  }
}

export const clearTotal = () => dispatch => {
  dispatch({ type: CLEAR_TOTAL });
}