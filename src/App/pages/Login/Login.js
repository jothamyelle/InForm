import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { orange500 } from 'material-ui/styles/colors';
import orange from '@material-ui/core/colors/orange';
import Footer from '../Footer/Footer'

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  //Makes submit button orange
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: orange500
  },
  //Makes the email and password labels orange when focussed.
  cssLabel: {
    '&$cssFocused': {
      color: orange[500],
    },
  },

  //Also needed to make text orange when focussed.
  cssFocused: {},

  //Makes the input underline orange when focussed 
  cssUnderline: {
    '&:after': {
      borderBottomColor: orange[500],
    },
  },
});

class Login extends Component {

  formHandler = (event) => {
    event.preventDefault();
    this.props.login()
  }

  render() {
  const { classes } = this.props;
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="display1">Sign in</Typography>
            <form className={classes.form} onSubmit={this.formHandler}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel 
                FormLabelClasses={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                }}
                >Email Address</InputLabel>
                <Input
                id="custom-css-input"
                classes={{
                  underline: classes.cssUnderline,
                }}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel 
                FormLabelClasses={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                }}
                >Password</InputLabel>
                <Input
                  classes={{
                    underline: classes.cssUnderline,
                  }}
                  name="password"
                  type="password"
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="raised"
                className={classes.submit}
              >
                Sign in
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
      <Footer />
    </div>
  );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);