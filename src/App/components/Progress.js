import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { orange400, orange50, orange500 } from 'material-ui/styles/colors';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    color: orange500
  },
});

class CircularIndeterminate  extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  const { classes } = this.props;
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <CircularProgress className={classes.progress} size={50} />
    </div>
  );
  }
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);