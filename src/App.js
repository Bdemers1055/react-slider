import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      slide: 1
    };
}
pullSlideIntoFrame(e){
  this.setState({
    slide: this.state.slide - 1
  });
}
pullSlideOutOfFrame(e){
  this.setState({
    slide: this.state.slide + 1
  });
}
  render() {
    return (
      <div className="flex">
        <div className="sliderFrame container">
          {this.state.slide === 1 ? <div className="slide1"><img src="https://placeimg.com/500/300/animals" alt="animals" /></div>: null}
          {this.state.slide === 2 ? <div className="slide2"><img src="https://placeimg.com/500/300/nature" alt="nature" /></div>: null}
          {this.state.slide === 3 ? <div className="slide3"><img src="https://placeimg.com/500/300/arch" alt="arch" /></div>: null}
        </div>
        <div className="container controls">
          <button className="previousArrow" onClick = {this.pullSlideOutOfFrame.bind(this)}>previous</button>
          <button className="nextArrow" onClick = {this.pullSlideIntoFrame.bind(this)}>next</button>
        </div>
      </div>
    );
  }
}

export default App;