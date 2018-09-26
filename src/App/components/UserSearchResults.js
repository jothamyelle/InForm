import React, { Component } from 'react'
import IndividualUser from '../../App/pages/IndividualUser';
import userStyles from '../pages/Users/userStyles.css';

class UserSearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listofResults = this.props.users.map((user) => {
        return (
          <div>
            <IndividualUser user={user} key={user.id}/>
          </div>
        );
    })

    return (
      <div>
        <h2>{this.props.users.length} Results</h2>
        <div className={userStyles.employeeContainer}>
          {listofResults}
        </div>          
      </div>
    ) 
    }
  }

export default UserSearchResults
