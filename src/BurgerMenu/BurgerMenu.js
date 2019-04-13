import React from 'react';
import {slide as Menu} from "react-burger-menu";
import './burgermenu.css';

export default class BurgerMenu extends React.Component {
    render() {
        return (
                <Menu right>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="github" className="menu-item" href="https://github.com/enthye">My Github</a>
                    <a id="paletton" className="menu-item" href="http://paletton.com">Paletton</a>
                </Menu>
        );
    }
}