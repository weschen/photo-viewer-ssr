import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'; 
import Header from '../common/Header';
import '../styles/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Header/>
      </div>
    );
  }
}
export default App;
