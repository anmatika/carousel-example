import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Carousel>
            <Carousel.Item>
              <div className="carousel-item">
                <h2>Zoo</h2> 
              </div>
              <Carousel.Caption>
                <div className="caption-item">Zoo caption</div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-item">
                <h2>Foo</h2> 
              </div>
              <Carousel.Caption>
               <div className="caption-item">Foo caption</div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-item">
                <h2>Bar</h2>
              </div>
              <Carousel.Caption>
               <div className="caption-item">Bar caption</div>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default App;
