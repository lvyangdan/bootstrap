import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './ui/pages/Home/Home'
import Login from './ui/pages/Login/Login'
import SignUp from './ui/pages/SignUp/SignUp'
import Profile from './ui/pages/Profile/Profile'
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route  exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/profile' component={profile}/>
          </Switch>
        </Router>
      </Provider>
      </div>
    );
  }
}

export default App;
