import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Spinner';
import TemporaryDrawer from '../Drawer';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import Header from '../Header/Header'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import JobsStyles from '../Jobs/JobsStyes.css'

class SingleFormSubmission extends Component {
  constructor(props){
    super(props);
    this.state = {
      formData: null,
      formName: null
    }
  }

  componentWillMount() {
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
          })
        })
      })
    })
  }

  renderFormHTML() {
    let htmlToRender = this.state.formData.map(control => {
      let controlKeys = Object.keys(control.value);
      for (let key in control.value) {
        if(Array.isArray(control.value[key])) {
          return (
            <TableRow>
            <TableRowColumn style={{fontSize: 24, whiteSpace: 'normal', wordWrap: 'break-word', padding: 10, verticalAlign: "center"}} variant="display1" gutterBottom align="center">{controlKeys[0]}:</TableRowColumn>
                {control.value[key].map(value => {
                  return (
                    <li>{value}</li>
                  )
                })}
            </TableRow>)
        } else {
          return (
            <TableRow>
              <TableRowColumn style={{fontSize: 24, whiteSpace: 'normal', wordWrap: 'break-word', padding: 10, verticalAlign: "center"}} variant="display1" gutterBottom align="center">{controlKeys[0]}:</TableRowColumn> 
              <TableRowColumn style={{fontSize: 24, whiteSpace: 'normal', wordWrap: 'break-word', padding: 10, verticalAlign: "center"}} variant="display1" gutterBottom align="center">{control.value[key]}</TableRowColumn>
            </TableRow>
          )
        }
      }
    });
    return htmlToRender;
  }

  render() {  
    if(this.state.formName && this.state.formData) {
      return(
        <div>
        <Header />
        <Paper elevation={3} style={{width: 800, padding: 25, margin: "20px auto 0"}}>
          <Typography variant="display2" gutterBottom align="center">{this.state.formName}</Typography>
          <Table selectable={false} className={JobsStyles.formsTable} style={{margin: "0 auto", width: "50%"}}>
            <TableBody displayRowCheckbox={false}>
              {this.renderFormHTML()}
            </TableBody>
          </Table>
        </Paper>
        </div>
      )
    } else {
      return(
      <div>
        Loading
      </div>
      )
    }
  }
}

export default SingleFormSubmission;