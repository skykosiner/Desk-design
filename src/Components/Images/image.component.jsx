import React, { Component } from 'react';
// Sass
import '../../styles/style.scss';
// Images
// Big images
import out from '../../images/far.png';
import react from '../../images/react.png';
// Small images
import node from '../../images/npm.png'
import mac from '../../images/mac.png'

class Image extends Component {
    render() {
        return (
            <div className="app">
                <div className="big">
                    <img className="img-big-inside" src={out} alt="" />
                    <img className="img-big-inside" src={react} alt="" />
                </div>
                <div className="small">
                    <img className="img-small-inside" src={node} alt="" />
                    <img className="img-small-inside img-2" src={mac} alt="" />
                </div>
            </div>
        );
    }
}

export default Image;

