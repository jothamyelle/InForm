import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import orange from '@material-ui/core/colors/orange';

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

});



class FormCategoryNameInput extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    formTemplateName: ''
  }
}

handleChange = (event) => {
  this.setState({formTemplateName: event.target.value})
  this.props.handleFormNameChange(event.target.value)
}

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
            Form Name
          </InputLabel>
          <Input
            id="custom-css-input"
            value={this.state.formTemplateName}
            onChange={this.handleChange}
            classes={{
              underline: classes.cssUnderline,
            }}
            required
            hintText="Form Name"
            floatingLabelText="Form Name"
          />
        </FormControl>
      </div>
    );
  }

}

FormCategoryNameInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormCategoryNameInput);
