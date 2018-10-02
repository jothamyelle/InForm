import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Spinner';
import TemporaryDrawer from '../Drawer';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import { orange300 } from 'material-ui/styles/colors';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import JobsStyles from '../Jobs/JobsStyes.css'
// import LoadingProgress from '../components/Progress'



class SingleFormTemplate extends Component {
  constructor(props){
    super(props);
    this.state = {
      formName: "",
      radioOptions: "",
    }
  }
  
  componentWillMount() {
    axios.get(`/api/getFormtemplateName/${this.props.formId}`)
    .then(formName => {
      this.setState({
        formName: formName.data[0].type
      })
    })
  }

  radioChange = event => {
    this.setState({ radioOptions: event.target.value });
  };

  renderFormHTML() {
    
    let controls = this.props.formData.map(control => {
      switch(control.type) {
        case 'header':
        return(
          <Typography variant="display2" gutterBottom align="center" style={{margin: 20}}>    
            {control.label}
            <input type="hidden" name={control.type} value={control.label} />
          </Typography>
        );
        case 'paragraph':
        return(
          <Typography component="p" style={{margin: 20}}>
            {control.label}
            <input type="hidden" name={control.type} value={control.label} />
          </Typography>
          );
        case 'checkbox':
        return(
          <div>
            <FormControl component="fieldset" style={{width: 300, margin: 20 }}>
              <FormLabel component="legend" color={orange300}>{control.label} </FormLabel>
              <FormGroup>
                
                {control.options.map(option => {
                  return(
                    <FormControlLabel
                      control={
                      <Checkbox name={control.label} required={control.required} style={{color: "orange"}}/>
                      }
                      label={option}
                    />
                    )
                  })}
              </FormGroup>
            </FormControl>
          </div>
        );
        case 'radio':
        return(
          <div>
            <FormControl component="fieldset" style={{width: 300, margin: 20 }}>
              <FormLabel component="legend">{control.label}</FormLabel>
              <RadioGroup
                name={control.label}
                required={control.required} 
                value={this.state.radioOptions}
                onChange={this.radioChange}
              >
                {control.options.map(option => {
                  return(
                    <FormControlLabel value={option} control={<Radio  style={{color: "orange"}}/>} label={option} /> 
                  )
                })}
              </RadioGroup>
            </FormControl>
          </div>
        );
        case 'select':
        return(
          <div>
            <FormControl style={{width: 300, margin: 20 }}>
              <InputLabel>{control.label}</InputLabel>
              <Select
                inputProps={{
                  name: control.label,
                  required: control.required
                }}
              >
                {control.options.map(option => {
                  return(
                  <MenuItem value={option}>{option}</MenuItem>
                  )
                })}
              
              </Select>
            </FormControl>
          </div>
        );
        case 'selectMultiple':
        console.log(control.options)
        return(
          <div>
            <FormControl style={{width: 300, margin: 20 }}>
              <InputLabel>{control.label}</InputLabel>
              <Select
                multiple
                name={control.label} 
                required={control.required}
                value={control.options}
              >
              
              {control.options.map((option) => {
              return ( 
                  <MenuItem
                    key={option}
                    
                  >
                    {option}
                  </MenuItem>
              )
              }
              )}
              </Select>
            </FormControl>
          </div>  
        );
        case 'text':
        return(
          <div>
            <TextField style={{width: 300, margin: 20 }}
              label={control.label}
              placeholder={control.placeholder} 
              maxlength={control.maxlength}
              required={control.required}
              margin="normal"
            />
          </div>
        );
        case 'textarea':
        return(
          <div>
            <TextField style={{width: 300, margin: 20 }}
              label={control.label}
              multiline
              rowsMax="4"
              margin="normal"
              name={control.label}
              placeholder={control.placeholder} 
              maxlength={control.maxlength}
              required={control.required}
            />
          </div>
        );
        case 'date':
        return(          
          <div>
            <TextField style={{ width: 300, margin: 20 }}
              label={control.label}
              type="date"
              // defaultValue= "2017-05-24"
              name={control.label}
              required={control.required}
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>
        );
        case 'time':
        return(
          <div>

            <TextField style={{ width: 300, margin: 20 }}
              label={control.label}
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              name={control.label}
              required={control.required}
            />
          </div>
        );
        case 'number':
        return(
          <div>
            <TextField style={{width: 300, margin: 20 }}
              label={control.label}
              type="number"
              name={control.label}
              required={control.required}
              placeholder={control.placeholder} 
              margin="normal"
            />
          </div>
        );
        case 'email':
        return(
          <div>
            <TextField style={{width: 300, margin: 20 }}
              label={control.label}
              type="number"
              name={control.label}
              required={control.required}
              placeholder={control.placeholder} 
              maxlength={control.maxlength}
              margin="normal"
            />
          </div>
       );
      }
    })
    return controls;
  }


  render() {  
    return(
      <div>
        <TemporaryDrawer />
          <form>
            <Paper elevation={3} style={{width: 500, padding: 25}} className={JobsStyles.searchBox}>
              <Typography variant="display4" gutterBottom align="center">
                {this.state.formName}
              </Typography>
              {this.renderFormHTML()}
              <RaisedButton type="submit" backgroundColor={orange300} style={{margin: 20}}>Submit</RaisedButton>
            </Paper>
          </form>
      </div>
    )
  }
}

export default SingleFormTemplate;