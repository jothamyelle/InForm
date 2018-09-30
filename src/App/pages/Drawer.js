import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { red500 } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import ListItem from 'material-ui/List/ListItem';


const styles = {
  list: {
    width: 250,
    color:red500
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <ListItem button component="a" href="./">Home</ListItem>
        <Divider />
        <ListItem button component="a" href="./admin_dashboard">Admin Dashboard</ListItem>
        <Divider />
        <ListItem button component="a" href="./form_templates">Form Templates</ListItem>
        <Divider />
        <ListItem button component="a" href="./forms">Forms</ListItem>
        <Divider />
        <ListItem button component="a" href="./jobs">Jobs</ListItem>
        <Divider />
        <ListItem button component="a" href="./hours">Hours</ListItem>
        <Divider />
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>Menu</Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);