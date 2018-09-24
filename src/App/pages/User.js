import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AwesomeComponent from '../Spinner';
import UserRoles from './UserRoles';

class User extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      error: null,
      users: [],
      userRolesList: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getUserRolesAndUsers();
  }

  getUserRolesAndUsers = () => {
    Promise.all([
      fetch('/api/getUsers'),
      fetch('/api/getUserRoles')
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([users, userRoles]) => {
      this.setState({
        users: users,
        userRolesList: userRoles,
        isLoading: false
      })
    })
  }

  render() {
    const { error, users, isLoading } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoading) {
      return <AwesomeComponent />
    } else {
      return (
        <div className="App">
          <Link to={'./'}>
            <button variant="raised">
              Home
            </button>
          </Link>
          <UserRoles userRolesList={this.state.userRolesList}/>
          <h1>List of Users</h1>
          {/* Check to see if any items are found*/}
          {users.length > 0 ? (
           <div>
              {/* Render the list of items */}
              {users.map((item) => {
                return (
                  <div key={item.id} className="employeeContainer">
                    <h2>ROLE</h2>
                    <figure>
                        <img  src='{item.image_url}' alt='silhouette' />
                        <figcaption>{item.first_name} {item.last_name}</figcaption>
                    </figure>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <h2>No List Items Found</h2>
            </div>
          )
          }
        </div>
      )
    }
  }
}

export default User;

