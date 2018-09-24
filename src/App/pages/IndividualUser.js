import React, { Component } from 'react';

class IndividualUser extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { user } = this.props;
    
    return (
        <div key={user.id} className="employeeContainer">
          <figure>
              <img src={user.image_url} alt='silhouette' />
              <figcaption>{user.first_name} {user.last_name}</figcaption>
          </figure>
        </div>
    )
  }
}

export default IndividualUser