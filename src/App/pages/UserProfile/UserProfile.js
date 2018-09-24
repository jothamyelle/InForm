import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const id = this.props.match.params.id
    
    return (
      <div class="employeeContainer">
				<h2>{id}</h2>
					<img src='https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-450w-149083895.jpg' alt='silhouette' />
			</div>
    )
  }
}

export default UserProfile