import axios from 'axios';
import { setAlert } from './alert';
import { SET_NAMES, CLEAR_NAMES} from './types';

export const setNames = (query) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    let fullQuery = `http://localhost:5000/${query}`;
    const res = await axios.get(fullQuery, config)
    const names = res.data;
    setAlert('Haku onnistui', 'success');
    dispatch({ type: CLEAR_NAMES });
    dispatch({
      type: SET_NAMES,
      payload: names
    });
  }
  catch (err) {
    console.error(err.response);
    console.log('virhe');
    setAlert('Virhe nimien haussa, tarkista osoite', 'danger');
    return;
  }
}

export const clearNames = () => dispatch => {
  dispatch({ type: CLEAR_NAMES });
}