import React, { Component } from 'react';
// Menu
import Menu from "../Components/Menu/menu.components";
// Sass
import '../styles/style.scss';
// Images
import Image from '../Components/Images/image.component'

class Home extends Component {
    render() {
        return (
            <div className="app">
                <Menu />
                {/* Title */}
                <h1 className="title-home">Desk design</h1>
                <Image />
            </div>
        );
    }
}

export default Home;

