import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from 'material-ui/List/ListItem';
import { Link } from 'react-router-dom'
import { ListSubheader } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';
import { orange500 } from 'material-ui/styles/colors';
import { orange400 } from 'material-ui/styles/colors';
import { orange300 } from 'material-ui/styles/colors';


const styles = theme => ({
  listSection: {
    backgroundColor: orange,
  },
  cssLabel: {
    '&$cssFocused': {
      color: orange[500],
    },
  },
  button: {
    backgroundColor: orange300
  },
});

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
        <Link 
        style={{ textDecoration: 'none' }} 
        to={`/`}
        onMouseEnter={(e) => e.target.style.backgroundColor = orange300}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'}
        ><ListItem >Dashboard</ListItem></Link>
        <Divider />
        <Link onMouseEnter={(e) => e.target.style.backgroundColor = orange300}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'} style={{ textDecoration: 'none' }} to={`/form_templates`}><ListItem>Form Templates</ListItem></Link>
        <Divider />
        <Link onMouseEnter={(e) => e.target.style.backgroundColor = orange300}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'} style={{ textDecoration: 'none' }} to={`/forms`}><ListItem>Forms</ListItem></Link>
        <Divider />
        <Link onMouseEnter={(e) => e.target.style.backgroundColor = orange300}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'} style={{ textDecoration: 'none' }} to={`/jobs`}><ListItem>Jobs</ListItem></Link>
        <Divider />
        <Link onMouseEnter={(e) => e.target.style.backgroundColor = orange300}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'} style={{ textDecoration: 'none' }} to={`/users`}><ListItem>Staff</ListItem></Link>
        <Divider />
        <Link onMouseEnter={(e) => e.target.style.backgroundColor = orange300}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'} style={{ textDecoration: 'none' }} to={`/hours`}><ListItem>Hours</ListItem></Link>
      </div>
    );

    return (
      <div>
        <Button className={classes.button} onClick={this.toggleDrawer('left', true)}>Menu</Button>
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