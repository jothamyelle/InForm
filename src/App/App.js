import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Users from './pages/Users/Users';
import Jobs from './pages/Jobs';
import NoMatch from './pages/404';
import UserProfile from './pages/UserProfile/UserProfile'
import Hours from './pages/Hours/Hours'
import FormSubmissions from './pages/FormSubmissions/FormSubmissions'
import FormTemplate from './pages/FormTemplates/FormTemplates'
import AdminDashboard from './pages/AdminDashboard'

class App extends Component {

  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/users/:id' component={UserProfile}/>
          <Route path='/users' component={Users}/>
          <Route path='/jobs' component={Jobs}/>
          <Route path='/hours' component={Hours}/>
          <Route path='/forms' component={FormSubmissions}/>
          <Route path='/form_templates' component={FormTemplate}/>
          <Route path='/admin_dashboard' component={AdminDashboard}/>
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