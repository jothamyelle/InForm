import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      <Link to={'./users'}>
        <RaisedButton variant="raised">
            Users
        </RaisedButton>
      </Link>

      <Link to={'./jobs'}>
        <RaisedButton variant="raised">
            Jobs
        </RaisedButton>
      </Link>

      <Link to={'./hours'}>
        <RaisedButton variant="raised">
            Hours
        </RaisedButton>
      </Link>

      <Link to={'./forms'}>
        <RaisedButton variant="raised">
            Forms
        </RaisedButton>
      </Link>

      <Link to={'./form_templates'}>
        <RaisedButton variant="raised">
            Form Templates
        </RaisedButton>
      </Link>

      <Link to={'./admin_dashboard'}>
        <RaisedButton variant="raised">
            Admin Dashboard
        </RaisedButton>
      </Link>
      
    </div>
    );
  }
}
export default Home;