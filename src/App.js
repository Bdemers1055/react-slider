import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="slider-frame">
          <div className="slide active"><img src="https://placeimg.com/500/300/animals" alt="animals" /></div>
          <div className="slide"><img src="https://placeimg.com/500/300/nature" alt="nature" /></div>
          <div className="slide"><img src="https://placeimg.com/500/300/arch" alt="architecture" /></div>
        </div>
      </div>
    );
  }
}

export default App;
