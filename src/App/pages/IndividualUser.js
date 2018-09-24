import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class IndividualUser extends Component {

  render() {
    const { user } = this.props;
    
    return (
        <figure key={user.id} className='employee'>
            <Link to={`/users/${user.id}`}><img src={user.image_url} alt='silhouette' /></Link>
            <figcaption>{user.first_name} {user.last_name}</figcaption>
        </figure>
    )
  }
}

export default IndividualUser