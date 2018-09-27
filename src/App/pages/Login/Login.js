import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  formHandler = (event) => {
    event.preventDefault();
    this.props.login()
  }
  render() {
    return (
    <div>
      <h2>Login</h2>
      <form onSubmit={this.formHandler}>
        Username
        <input></input>
        Password
        <input></input>
        <button>Log In</button>
      </form>
    </div>
    );
  }
}
export default Login;