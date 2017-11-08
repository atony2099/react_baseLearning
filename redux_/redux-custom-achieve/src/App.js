import React, { Component} from 'react';
import PropTypes from 'prop-types'

import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Content from './Content.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
