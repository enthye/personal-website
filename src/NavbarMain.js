import React from "react";

export default class NavbarMain extends React.Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-dark bg-dark text-light fixed-top">
                <a className="navbar-brand" href="/">Kevin Xu</a>

                <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar" aria-controls="navbarToggleExternalContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">My Website</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/enthye">My Github</a>
                        </li>
                    </ul>
                </div>
            </nav>


            </div>
        )
    }
}

