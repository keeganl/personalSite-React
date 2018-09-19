import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import Blurb from './components/Blurb';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Blurb />
      </div>
    );
  }
}

export default App;
