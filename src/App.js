import React, {Component} from 'react';
import './index.css';
import BurgerMenu from "./BurgerMenu/BurgerMenu";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BurgerMenu/>
                <div>
                    <svg width="100%" height="320">
                        <circle cx="50%" cy="50%" r="100" fill="white"/>
                    </svg>

                    <p align="center">Balance | Emphasis | Unity</p>
                    <h2 align="center">
                        Inspired Solutions Driven Design
                    </h2>

                    <footer>
                        <p className="bottomText" align="center">Website strongly inspired by movio.co</p>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
