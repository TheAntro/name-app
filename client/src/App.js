import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import './App.css';

const App = () =>
  <Router>
    <Fragment>
      <h1>Front-end tulee tähän</h1>
      <Route exact path='/' component={SearchForm} />
    </Fragment>
  </Router>
  

export default App;
