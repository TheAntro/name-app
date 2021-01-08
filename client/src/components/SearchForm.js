import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { setAlert } from '../actions/alert';
import { setNames } from '../actions/names';

const SearchForm = ({ setAlert, setNames }) => {
  const [formData, setFormData] = useState({ query: '' });
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      let fullQuery = `http://localhost:5000/${query}`;
      const res = await axios.get(fullQuery, config)
      console.log(res);
      setAlert('Haku onnistui', 'success');
      setNames(res.data);
    } catch (err) {
      console.error(err.response);
      setAlert('Virhe nimien haussa, tarkista osoite', 'danger');
      return;
    }
  }

  const { query } = formData;
  return (
    <Fragment>
      <h1>Hakulomake:</h1>
      <form onSubmit={e => onSubmit(e)}>
        <input 
          type='text' 
          placeholder='Query' 
          name='query' 
          value={query} 
          onChange={e => onChange(e)} 
          required />
        <input type='submit' value='Hae Nimet' />
      </form>
    </Fragment>
  )
}

SearchForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  setNames: PropTypes.func.isRequired,
}

export default connect(null, { setAlert, setNames })(SearchForm);
