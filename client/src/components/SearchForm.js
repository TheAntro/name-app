import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setNames } from '../actions/names';

const SearchForm = ({ setNames }) => {
  const [formData, setFormData] = useState({ query: '' });
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    setNames(query);
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

export default connect(null, { setNames })(SearchForm);
