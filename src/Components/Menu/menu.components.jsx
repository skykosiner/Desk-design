import React, { Component } from 'react';
import './menu.scss';

class Menu extends Component {
    render() {
        function login() {
            window.location.href = "/login"
        }
        function sign() {
            window.location.href = "/sign-up"
        }
        return (
            <div className="app">
                {/* Inside black bit */}
                <div className="inside"></div>
                {/* For login and sign up */}
                <button onClick={login} className="global-underline login">Login</button>
                <button onClick={sign} className="global-underline sign">Sign up</button>
            </div>
        );

    }

}

export default Menu;

