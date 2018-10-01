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
    this.setState({ radioOtpions: event.target.value });
  };

  renderFormHTML() {
    let controls = this.props.formData.map(control => {
      switch(control.type) {
        case 'header':
        return(
          <Typography variant="display2" gutterBottom align="center">    
            {control.label}
            <input type="hidden" name={control.type + control.id} value={control.label} />
          </Typography>
        );
        case 'paragraph':
        return(
          <Typography component="p">
            {control.label}
            <input type="hidden" name={control.type + control.id} value={control.label} />
          </Typography>
          );
        case 'checkbox':
        return(
            <FormControl component="fieldset">
              <FormLabel component="legend" color="primary">{control.label} </FormLabel>
              <FormGroup>
                
                {control.options.map(option => {
                  return(
                    <FormControlLabel
                      control={
                      <Checkbox name={control.label + control.id} required={control.required} style={{color: "orange"}}/>
                      }
                      label={option}
                    />
                    )
                  })}
              </FormGroup>
            </FormControl>
        );
        case 'radio':
        return(
          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">{control.label}</FormLabel>
              <RadioGroup
                name={control.label + control.id}
                required={control.required} 
              >
                {control.options.map(option => {
                  return(
                    <FormControlLabel control={<Radio value={option} style={{color: "orange"}}/>} label={option} /> 
                  )
                })}
              </RadioGroup>
            </FormControl>
          </div>
        );
        case 'select':
        return(
          <div>
          <FormControl style={{minWidth: 120}}>
            <InputLabel>{control.label}</InputLabel>
            <Select
              inputProps={{
                name: control.label + control.id,
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

          <FormControl style={{minWidth: 120}}>
            <InputLabel>{control.label}</InputLabel>
            <Select
              multiple
              name={control.label + control.id} 
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
        );
        case 'text':
        return(
          <div>
          <label>{control.label}</label>
          <input type="text" name={control.label + control.id}
            placeholder={control.placeholder} 
            maxlength={control.maxlength}
            required={control.required} />
          </div>
        );
        case 'textarea':
        return(
          <div>
            <label>{control.label}</label>
            <textarea name={control.label + control.id}
              placeholder={control.placeholder} 
              maxlength={control.maxlength}
              required={control.required} />
          </div>
        );
        case 'date':
        return(
          <div>
            <label>{control.label}</label>
            <input type="date" name={control.label + control.id}
              required={control.required} />
          </div>
        );
        case 'time':
        return(
          <div>
            <label>{control.label}</label>
            <input type="time" name={control.label + control.id}
              required={control.required} />
          </div>
        );
        case 'number':
        return(
          <div>
            <label>{control.label}</label>
            <input type="number" name={control.label + control.id}
              placeholder={control.placeholder} 
              required={control.required} />
          </div>
        );
        case 'email':
        return(
          <div>
            <label>{control.label}</label>
            <input type="email" name={control.label + control.id}
              placeholder={control.placeholder} 
              maxlength={control.maxlength}
              required={control.required} />
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
          <Typography variant="display4" gutterBottom align="center">
            {this.state.formName}
          </Typography>
          <div className={JobsStyles.searchBox}>
            {this.renderFormHTML()}
          </div>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default SingleFormTemplate;