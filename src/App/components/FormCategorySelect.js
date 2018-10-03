import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import orange from '@material-ui/core/colors/orange';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'block',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});



const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: orange,
    tertiary: orange,
  }
})

class SimpleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenFormCategory: '',
    }
  }


  handleChange = event => {
    this.setState({ chosenFormCategory: event.target.value });
    this.props.handleFormChange(event.target.value)
  };

  render() {
    const { classes } = this.props;
    const options = this.props.formCategories.map(category => (
      <MenuItem color="primary" value={category}>{category}</MenuItem>
    ))
    
    return (
      <form className={classes.root} autoComplete="off">
      
        <FormControl required={true} className={classes.formControl}>
        <MuiThemeProvider theme={theme}>        
          <InputLabel>Category</InputLabel>
          <Select
            color="primary"
            required={true}
            value={this.state.chosenFormCategory}
            onChange={this.handleChange}
          >
            {options}
          </Select>
          </MuiThemeProvider>
        </FormControl>
        
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
