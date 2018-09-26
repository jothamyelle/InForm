import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      <Link to={'./users'}>
        <button variant="raised">
            Users
        </button>
      </Link>

      <Link to={'./jobs'}>
        <button variant="raised">
            Jobs
        </button>
      </Link>

      <Link to={'./hours'}>
        <button variant="raised">
            Hours
        </button>
      </Link>

      <Link to={'./forms'}>
        <button variant="raised">
            Forms
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;