import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Spinner';
// import UserRoles from '../UserRoles';
import IndividualUser from '../IndividualUser';
import userStyles from './userStyles.css';
import UserSearch from '../../components/UserSearch';
import TemporaryDrawer from '../Drawer';


class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      usersList: [],
      userRolesList: [],
      isLoading: false,
      currentQuery: false
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
        isLoading: false,
        currentQuery: false
      })
    })
  }

  handleSearchQuery = (doesQueryExist) => {
    this.setState(prevState => ({
      currentQuery: doesQueryExist
    }));
  }

  render() {
    const { error, usersList, isLoading, userRolesList, currentQuery } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoading) {
      return <LoadingSpinner />
    } else {
      return (
        <div className="App">
          <TemporaryDrawer />
          {/* <UserRoles userRolesList={this.state.userRolesList}/> */}
            <h1>Employees</h1>
          <UserSearch handleSearchQuery={this.handleSearchQuery} data={usersList}/>
          {!currentQuery && (
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
          )}
        </div>
      )
    }
  }
}

export default User;