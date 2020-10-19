import React, { Component } from 'react';
import fire from '/Users/yonikosiner/Documents/code/desk-design/src/config/Fire.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="app">
                <h1>hello world</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        );

    }

}

export default Home;

