import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Spinner';
import TemporaryDrawer from '../Drawer';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import { orange300 } from 'material-ui/styles/colors';
// import JobsStyles from './Jobs/JobsStyes.css'
// import LoadingProgress from '../components/Progress'


class SingleFormTemplate extends Component {
  constructor(props){
    super(props);
    this.state = {
      formName: ""
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

  renderFormHTML() {
    let controls = this.props.formData.map(control => {
      switch(control.type) {
        case 'header':
        console.log(control.label);      
        return(
          <Typography variant="display2" gutterBottom align="center">    
            {control.label}
          </Typography>
        );
        case 'paragraph':
        return(
          <Typography component="p">
            {control.label}
          </Typography>
          );
        case 'checkbox':
        return(
          <div>
            <Typography component="p">
              {control.label}
            </Typography>
            {control.options.map(option => {
              return(
              <p>
                <input type="checkbox" name={control.label + control.id}
                  required={control.required}/>
                <label>{option}</label>
              </p>
              )
            })}
          </div>
        );
        case 'radio':
        return(
          <div>
          <label>{control.label}</label>
            {control.options.map(option => {
              return(
              <p>
                <input type="radio" name={control.label + control.id}
                  required={control.required}/>
                <label>{option}</label>
              </p>
              )
            })}
          </div>
        );
        case 'select':
        return(
          <div>
          <label>{control.label}</label>
          <select name={control.label + control.id}
            required={control.required}>
            {control.options.map(option => {
              return(
              <option>{option}</option>
              )
            })}
            </select>
          </div>
        );
        case 'selectMultiple':
        return(
          <div>
          <label>{control.label}</label>
          <select name={control.label + control.id} multiple
            required={control.required}>
            {control.options.map(option => {
              return(
              <option>{option}</option>
              )
            })}
            </select>
          </div>
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
          {this.renderFormHTML()}
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default SingleFormTemplate;