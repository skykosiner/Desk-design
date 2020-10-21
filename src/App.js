import React, { Component } from 'react';
import Login from './pages/login';
import fire from './config/Fire';
import Home from './pages/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
class adminlogin extends Component {

  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
          </Switch>
        </BrowserRouter >
      </div>
    );
  }
}
export default adminlogin;
