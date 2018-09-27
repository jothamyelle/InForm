import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
    <div>
      <h2>Login</h2>
      <form>
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