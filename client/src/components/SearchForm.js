import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setNames, clearNames } from '../actions/names';
import { setTotal, clearTotal } from '../actions/total';

const SearchForm = ({ setNames, clearNames, setTotal, clearTotal }) => {
  const [formData, setFormData] = useState({ queryName: '' });
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const getNames = e => {
    setNames('names');
  }

  const getNamesPopular = e => {
    setNames('names?sort=popularity');
  }

  const getNamesAlphabetical = e => {
    setNames('names?sort=alphabetical');
  }
  
  const onSubmit = e => {
    e.preventDefault();
    setNames(`names/${queryName}`);
  }

  const clearPage = e => {
    clearNames();
    clearTotal();
  }

  const { queryName } = formData;
  return (
    <Fragment>
      <h1>Solita Dev Akatemia Nimisovellus</h1>
      <div className='btn-group'>
        <button className='btn' onClick={ e => getNames(e) }>Järjestämättömänä</button>
        <button className='btn' onClick={ e => getNamesPopular(e) }>Suosion mukaan</button>
        <button className='btn' onClick={ e => getNamesAlphabetical(e) }>Aakkosjärjestyksessä</button>
      </div>
      <div className='btn-group'>
        <form onSubmit={e => onSubmit(e)}>
          <input 
            type='text' 
            placeholder='Nimi' 
            name='queryName' 
            value={queryName} 
            onChange={e => onChange(e)} 
            required />
          <input className='btn' type='submit' value='Nimen perusteella' />
        </form>
      </div>
      <div className='btn-group'>
        <button className='btn' onClick={ e => setTotal(e) }>Nimien yhteismäärä</button>
      </div>
      <div className='btn-group'>
        <button className='btn' onClick={ e => clearPage(e) }>Tyhjennä</button>
      </div>
    </Fragment>
  )
}

SearchForm.propTypes = {
  setNames: PropTypes.func.isRequired,
  clearNames: PropTypes.func.isRequired,
  setTotal: PropTypes.func.isRequired,
  clearTotal: PropTypes.func.isRequired,
}

export default connect(null, { setNames, clearNames, setTotal, clearTotal })(SearchForm);
