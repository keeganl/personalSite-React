import React, { Component } from 'react';
import './sass/Blurb.css';

class Blurb extends Component {
  render() {
    return (
      <div class="blurb">
        <h1>Hey, I'm Keegan! 👋 </h1>
        <div class="title">
          <p>I am a </p>
          <p id="job">developer</p>
        </div>
      </div>
    );
  }
}

export default Blurb;