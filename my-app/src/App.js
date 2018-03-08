import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LikeView from './components/LikeView'

class App extends Component {
  render() {
    return (
      <LikeView like={'name'} />
    );
  }
}

export default App;
