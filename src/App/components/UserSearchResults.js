import React, { Component } from 'react'
import IndividualUser from '../../App/pages/IndividualUser';
import userStyles from '../pages/Users/userStyles.css';
import Typography from '@material-ui/core/Typography';

class UserSearchResults extends Component {

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
          <Typography variant="display2" gutterBottom align="center">
            Search Results ({this.props.users.length})
          </Typography>
          <div style={{alignItems:'center', justifyContent:'center'}} className={userStyles.employeeContainer}>
            {listofResults}
          </div>
        </div>
          ) : (
            <Typography variant="display2" gutterBottom align="center">
              No Results
            </Typography>
          )}
      </div>
    ) 
    }
  }

export default UserSearchResults
