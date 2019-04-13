import React from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

export default class NavbarMain extends React.Component {
        render() {
        return (
            <div>
            <nav className="navbar navbar-dark bg-dark text-light fixed-top">
                <a className="navbar-brand" href="/">Kevin Xu</a>
            </nav>

            </div>
        )
    }
}

