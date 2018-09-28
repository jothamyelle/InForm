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
        {this.props.users.length > 0 ?  (
        <div>
          <h2>Search Results ({this.props.users.length})</h2>
          <div className={userStyles.employeeContainer}>
            {listofResults}
          </div>
        </div>
          ) : (<h2>No Results</h2>)}
      </div>
    ) 
    }
  }

export default UserSearchResults
