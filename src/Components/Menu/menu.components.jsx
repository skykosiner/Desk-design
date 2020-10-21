import React, { Component } from 'react';
import './menu.scss';

class Menu extends Component {
    render() {
        // To get to login page
        function login() {
            window.location.href = "/login"
        }
        // To get to sign in page
        function sign() {
            window.location.href = "/sign-up"
        }
        // Home page
        function home() {
            window.location.href = "/"
        }
        // About page
        function about() {
            window.location.href = "/about"
        }
        // Contact page
        function contact() {
            window.location.href = "/contact"
        }
        return (
            <div className="app">
                {/* Inside black bit */}
                <div className="inside"></div>
                {/* For login and sign up */}
                <div className="log">
                    <button onClick={login} className="global-underline button">Login</button>
                    <button onClick={sign} className="global-underline button">Sign up</button>
                </div>
                {/* For navigation button */}
                <div className="nav">
                    <button onClick={home} className="global-underline nav-button">Home</button>
                    <button onClick={about} className="global-underline nav-button">About</button>
                    <button onClick={contact} className="global-underline nav-button">Contact</button>
                </div>
            </div>
        );
    }

}

export default Menu;

