import React, { Component } from 'react';
import './assets/logo.png';
import './sass/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li id="logo"><img src="./assets/logo.png" width="160" height="20" alt="logo"/></li>
            <li id="h"><a href="#home">Home</a></li>
            <li id="p"><a href="#proj">Projects</a></li>
            <li id="a"><a href="#me">About</a></li>
            <li id="c"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
    );
  } 
}

export default NavBar;
