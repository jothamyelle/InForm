import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: 100 + theme.spacing.unit * 2,
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing.unit,
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
});

class SimpleSlide extends React.Component {
  state = {
    checked: true,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div className={classes.root}>
      <Slide direction="down" in={checked} mountOnEnter unmountOnExit >
          <Typography variant="display3" gutterBottom align="center">
            Good Morning Ben. 
          </Typography>
          </Slide>
          <Slide direction="down" in={checked} mountOnEnter unmountOnExit {...(checked ? { timeout: 1000 } : {})}>
          <Typography variant="display3" gutterBottom align="center">
            Currently {this.props.todaysFormsNumber} forms from {this.props.todaysJobsNumber} active jobs
          </Typography>
          </Slide>
      </div>
    );
  }
}

SimpleSlide.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlide);