import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  container: {
    display: 'block',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: orange[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: orange[500],
    },
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});


class CustomizedInputs extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    name: ''
  }
}

handleChange = event => {
  this.setState({ name: event.target.value });
  this.props.setParentValue(event.target.value)
};

render() {
const { classes } = this.props;
return (
    <div className={classes.container}>
      <FormControl className={classes.margin}>
        <InputLabel
          htmlFor="custom-css-input"
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
          Search for jobs...
        </InputLabel>
        <Input
          id="custom-css-input"
          classes={{
            underline: classes.cssUnderline,
          }}
          placeholder="Search for..."
          value={this.state.name}
          onChange={this.handleChange}
          hintText="Search for jobs"
          floatingLabelText="Search for jobs"
        />
      </FormControl>
    </div>
  );
}

}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);
