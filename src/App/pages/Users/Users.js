import React, { Component } from 'react';
import LoadingProgress from '../../components/Progress'
// import UserRoles from '../UserRoles';
import IndividualUser from '../IndividualUser';
import userStyles from './userStyles.css';
import UserSearch from '../../components/UserSearch';
import Typography from '@material-ui/core/Typography';
import Footer from '../Footer/Footer'
import Header from '../Header/Header';

class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      usersList: [],
      userRolesList: [],
      isLoading: true,
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
      return <LoadingProgress />
    } else {
      return (
        <div>
          <Header />
          <br/>
          <div className="App">
            {/* <UserRoles userRolesList={this.state.userRolesList}/> */}
            <Typography variant="display3" gutterBottom align="center">
              Staff
            </Typography>
            <UserSearch handleSearchQuery={this.handleSearchQuery} data={usersList}/>
            {!currentQuery && (
            <div>
              {userRolesList.map((role) =>  {
                return (
                  <div key={role.id}>
                  <Typography variant="display2" gutterBottom align="center">
                    {role.role}
                  </Typography>
                  <div style={{alignItems:'center', justifyContent:'center'}} className={userStyles.employeeContainer}>
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
          <br/>
          <Footer />
        </div>
      )
    }
  }
}

export default User;