import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


import './App.css';
import Home from './pages/Home';
import Users from './pages/Users/Users';
import Jobs from './pages/Jobs';
import NoMatch from './pages/404';
import UserProfile from './pages/UserProfile/UserProfile'
import Hours from './pages/Hours/Hours'
import FormSubmissions from './pages/FormSubmissions/FormSubmissions'
import FormTemplate from './pages/FormTemplates/FormTemplates'
import FormBuilder from './pages/FormBuilder/FormBuilder';
import AdminDashboard from './pages/AdminDashboard'
import Login from '../App/pages/Login/Login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  login = () => {
    this.setState({
      loggedIn: true
    })
  }
  
  logout = () => {
    this.setState({
      loggedIn: false
    })
  }

  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' render={ () => (this.state.loggedIn ? ( <AdminDashboard/> ) : ( <Login login={this.login}/> )) }/>
          <Route path='/users/:id' render={ (props) => (this.state.loggedIn ? ( <UserProfile {...props}/> ) : ( <Login/> )) }/>
          <Route exact path='/users/' render={ () => (this.state.loggedIn ? ( <Users/> ) : ( <Login login={this.login}/> )) }/>
          <Route path='/jobs' render={ () => (this.state.loggedIn ? ( <Jobs/> ) : ( <Login login={this.login}/> )) }/>
          <Route path='/hours' render={ () => (this.state.loggedIn ? ( <Hours/> ) : ( <Login login={this.login}/> )) }/>
          <Route path='/forms' render={ () => (this.state.loggedIn ? ( <FormSubmissions/> ) : ( <Login login={this.login}/> )) }/>
          <Route path='/form_templates' render={ () => (this.state.loggedIn ? ( <FormTemplate/> ) : ( <Login login={this.login}/> )) }/>
          <Route path='/form_builder' render={ () => (this.state.loggedIn ? ( <FormBuilder/> ) : ( <Login login={this.login}/> )) }/>
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