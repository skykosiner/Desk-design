import React, { Component } from 'react';
// Menu
import Menu from "../Components/Menu/menu.components";
// Sass
import '../styles/style.scss';
// Images
import out from '../images/far.png';
import react from '../images/react.png'

class Home extends Component {
    render() {
        return (
            <div className="app">
                <Menu />
                {/* Title */}
                <h1 className="title-home">Desk design</h1>
                {/* Images */}
                <div className="big">
                    <img className="img-big-inside" src={out} alt="" />
                    <img className="img-big-inside" src={react} alt="" />
                </div>
            </div>
        );

    }

}

export default Home;

