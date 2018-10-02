import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
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
      <MenuItem value={category}>{category}</MenuItem>
    ))
    
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel>Category</InputLabel>
          <Select
            required
            value={this.state.chosenFormCategory}
            onChange={this.handleChange}
          >
          {options}
          </Select>
        </FormControl>
        
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
