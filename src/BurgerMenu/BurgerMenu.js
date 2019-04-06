import React from 'react';
import BurgerMenuItem from './BurgerMenuItem';

export default class BurgerMenu extends React.Component {
    render() {
        return (
            <div>
                <button className="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


            </div>
        );
    }
}