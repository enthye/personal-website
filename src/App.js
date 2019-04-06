import React, { Component } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark text-light">
            <a className="navbar-brand" href="/">Kevin Xu</a>
            <BurgerMenu/>
        </nav>

          <svg width="100%" height="320">
              <circle cx="50%" cy="50%" r="100" fill="white"/>
          </svg>

          <p align="center">Balance | Emphasis | Unity</p>
          <h2 align="center">
            Inspired Solutions Driven Design
          </h2>

          <p className="bottomText" align="center">Website strongly inspired by movio.co</p>




      </div>
    );
  }
}

export default App;
