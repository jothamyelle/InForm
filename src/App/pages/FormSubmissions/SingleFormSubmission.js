import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Spinner';
import TemporaryDrawer from '../Drawer';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import Header from '../Header/Header'

class SingleFormSubmission extends Component {
  constructor(props){
    super(props);
    this.state = {
      formData: null,
      formName: null
    }
  }

  componentDidMount() {
    axios.get(`/api/getFormSubmission/${this.props.match.params.id}`)
    .then(formData => {
      this.setState({
        formData: formData.data
      }, () => {
        let rootDiv = document.getElementById('formSubmissionContent');
        axios.get(`/api/getFormTemplateName/${this.state.formData[0].form_template_id}`)
        .then(formName => {
          this.setState({
            formName: formName.data[0].type
          }, () => {
            rootDiv.innerHTML = this.renderFormHTML();
          })
        })
      })
    })
  }

  renderFormHTML() {
    let htmlToRender = `<h1>${this.state.formName}</h1>`;
    this.state.formData.forEach(control => {
      let controlKeys = Object.keys(control.value);
      for (let key in control.value) {
        if(Array.isArray(control.value[key])) {
          htmlToRender += `
            <div>
              <strong>${controlKeys[0]}:</strong>
              <ul>`;
              control.value[key].forEach(value => {
                htmlToRender += `
                <li>${value}</li>`;
              })
              htmlToRender += 
              `</ul>
            </div>`
        } else {
          htmlToRender += `
            <div>
              <p><strong>${controlKeys[0]}:</strong> ${control.value[key]}</p>
            </div>
          `
        }
      }
    });
    return htmlToRender;
  }

  render() {  
    return(
      <div>
        <Header />
          <div id="formSubmissionContent"></div>
      </div>
    )
  }
}

export default SingleFormSubmission;