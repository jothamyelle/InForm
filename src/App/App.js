import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import User from './pages/User';
import Jobs from './pages/Jobs';
import NoMatch from './pages/404';

class App extends Component {

  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/users' component={User}/>
          <Route path='/jobs' component={Jobs}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;