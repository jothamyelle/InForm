import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AwesomeComponent from '../Spinner';
import UserRoles from './UserRoles';

class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      usersList: [],
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
        usersList: users,
        userRolesList: userRoles,
        isLoading: false
      })
    })
  }

    getUserRole(user) {
      this.state.userRolesList.forEach(function(item) {
        if (item.id === user.role_id) {
          return (
            <p>{item.role}</p>
          )
        }
      })
    }

  render() {
    const { error, usersList, isLoading, userRolesList } = this.state;

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
          <h1>Employees</h1>
          {/* Check to see if any items are found*/}
          {usersList.length > 0 ? (
          <div>
            {/* Render the list of items */}
            {usersList.map((user) => {
              return (
                <div key={user.id} className="employeeContainer">
                <p>{(userRolesList.find(item => item.id === user.role_id)).role}</p>
                  <figure>
                      <img src={user.image_url} alt='silhouette' />
                      <figcaption>{user.first_name} {user.last_name}</figcaption>
                  </figure>
                </div>
              );
            })}
          </div>
          ) : (
            <div>
              <h2>No Employees Found</h2>
            </div>
          )
          }
        </div>
      )
    }
  }
}

export default User;

