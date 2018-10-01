import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 125,
    height: 125,
  },
};

class ImageAvatars extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.row}>
        <Avatar
          // alt="Adelle Charles"
          src={this.props.image_url}
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
      </div>
    );
  }
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);