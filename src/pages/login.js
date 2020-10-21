import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '/Users/yonikosiner/Documents/code/desk-design/src/config/Fire.js';
import '/Users/yonikosiner/Documents/code/desk-design/src/styles/login.scss'

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }


    render() {
        return (
            <div className="app">
                <h1 className="title">Desk setup design 🖥️</h1>
                <form>
                    {/* Username */}
                    <input className="username" value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Login" />
                    {/* Password */}
                    <input className="password" value={this.state.password} onChange={this.handleChange} type="password" name="password" id="exampleInputPassword1" placeholder="Password" />
                    {/* Login buttons */}
                    <button type="submit" onClick={this.login} className="login-button">Login</button>
                    <button onClick={this.signUp} className="button-sign">Signup</button>
                </form>
            </div>
        );
    }
}
export default Login;