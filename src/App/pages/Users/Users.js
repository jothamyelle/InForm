import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Spinner';
import UserRoles from '../UserRoles';
import IndividualUser from '../IndividualUser';
import userStyles from './userStyles.css';

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

  render() {
    const { error, usersList, isLoading, userRolesList } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoading) {
      return <LoadingSpinner />
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
          <div>
            {userRolesList.map((role) =>  {
              return (
                <div key={role.id}>
                  <h2>{role.role}</h2>
                  <div className={userStyles.employeeContainer}>
                  {usersList.map((user) => {
                    if (user.role_id === role.id) {
                      return (
                        <IndividualUser user={user} key={user.id}/>
                      );
                    }
                  })}
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
      )
    }
  }
}

export default User;