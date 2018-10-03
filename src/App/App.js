import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import './App.css';
import Users from './pages/Users/Users';
import Jobs from './pages/Jobs';
import NoMatch from './pages/404';
import UserProfile from './pages/UserProfile/UserProfile'
import Hours from './pages/Hours/Hours'
import FormSubmissions from './pages/FormSubmissions/FormSubmissions'
import FormTemplate from './pages/FormTemplates/FormTemplates'
import SingleFormTemplate from './pages/FormTemplates/SingleFormTemplate'
import SingleFormSubmission from './pages/FormSubmissions/SingleFormSubmission'
import FormBuilder from './pages/FormBuilder/FormBuilder';
import AdminDashboard from './pages/AdminDashboard'
import Login from '../App/pages/Login/Login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      formData: [],
      formId: null,
      formSubmitted: false,
    }
    this.getFormData = this.getFormData.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.setFormSubmittedToFalse = this.setFormSubmittedToFalse.bind(this); 

  }

  getFormData = (formData, id) => {
    this.setState({
      formData: formData,
      formId: id
    })
  }

  login = () => {
    this.setState({
      loggedIn: true
    })
  }
  
  logout = () => {
    this.setState({
      loggedIn: true
    })
  }

  formSubmit = () => {
    this.setState({
      formSubmitted: true
    })
  } 

  setFormSubmittedToFalse = () => {
    this.setState({
      formSubmitted: false
    })
  }


  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' render={ () => (this.state.loggedIn ? ( <AdminDashboard/> ) : ( <Login login={this.login}/> )) }/>
          <Route path='/users/:id' render={ (props) => ( <UserProfile {...props}/>)}/>
          <Route exact path='/users/' render={ () => (this.state.loggedIn ? ( <Users/> ) : ( <Login login={this.login}/> )) }/>
          <Route path='/jobs' render={ () => (this.state.loggedIn ? ( <Jobs/> ) : ( <Login login={this.login}/> )) }/>
          <Route path='/hours' render={ () => (this.state.loggedIn ? ( <Hours/> ) : ( <Login login={this.login}/> )) }/>
          <Route path='/forms' render={ () => (this.state.loggedIn ? ( <FormSubmissions getFormData={this.getFormData}/> ) : ( <Login login={this.login}/> )) }/>
          <Route path='/form_submissions/:id' render={ (props) => ( <SingleFormSubmission {...props}/> )}/>
          <Route path='/form_templates/:id' render={ () => (this.state.loggedIn ? ( <SingleFormTemplate formData={this.state.formData} formId={this.state.formId} formSubmit={this.formSubmit}/> ) : ( <Login login={this.login}/> )) }/>
          <Route path='/form_templates' render={ () => (this.state.loggedIn ? ( <FormTemplate getFormData={this.getFormData} formSubmitted={this.state.formSubmitted} setFormSubmittedToFalse={this.setFormSubmittedToFalse}/> ) : ( <Login login={this.login}/> )) }/>
          <Route path='/form_builder' render={ () => (this.state.loggedIn ? ( <FormBuilder/> ) : ( <Login login={this.login}/> )) }/>
          <Route path='/login' render={ () => (this.state.loggedIn ? ( <Login/> ) : ( <Login login={this.login}/> )) }/>
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