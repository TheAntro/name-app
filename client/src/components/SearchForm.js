import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const SearchForm = props => {
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

      console.log(query);
      const res = await axios.get(query, config)
      console.log(res.data);
    } catch (err) {
      console.error(err.response);
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

}

export default SearchForm
