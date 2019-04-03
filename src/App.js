import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark text-light">
            <a className="navbar-brand" href="/">Kevin Xu</a>

            <button className="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>

          <svg width="100%" height="320">
              <circle cx="50%" cy="50%" r="100" fill="white"/>
          </svg>

          <h2 align="center">
            Inspired Solutions Driven Design
          </h2>

          <p align="center">Website strongly inspired by movio.co</p>

      </div>
    );
  }
}

export default App;
