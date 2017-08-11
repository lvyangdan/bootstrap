import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './ui/pages/Home/Home'
import Login from './ui/pages/Login/Login'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route  exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
