import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ImageAvatars from '../components/Avatar'
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto'

class IndividualUser extends Component {

  render() {
    const { user } = this.props;
    
    return (
        <figure key={user.id} className='employee'>
            <Link to={`/users/${user.id}`}>
              {/* <img src={user.image_url} alt='silhouette' /> */}
              <ImageAvatars image_url={user.image_url}/>
            </Link>
            <Typography variant="Subheading" gutterBottom align="center">
              {user.first_name} {user.last_name}
            </Typography>
            {/* <figcaption>{user.first_name} {user.last_name}</figcaption> */}
        </figure>
    )
  }
}

export default IndividualUser