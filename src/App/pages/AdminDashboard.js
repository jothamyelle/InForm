import React, { Component } from 'react';
import { uniqueJobsArray } from '../../helpers/unique_jobs';
import TemporaryDrawer from './Drawer';
import LoadingProgress from '../components/Progress';
import Typography from '@material-ui/core/Typography';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import { orange300 } from 'material-ui/styles/colors';
import SimpleSlide from '../components/AdminDashboardSlide'
import SimpleGrow from '../components/AdminDashboardGrow'
import Header from './Header/Header';
import { Link } from 'react-router-dom';

import Grow from '@material-ui/core/Grow';


function Transition(props) {
  return <SimpleSlide direction="up" {...props} />;
}

class AdminDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      todaysForms: null,
      uniqueJobs: []
    }
  }

  formatDate = (value) => {
    return value.getFullYear() + "-" + value.getMonth()+1 + "-" + value.getDate();
  }

  componentDidMount() {
    this.getSubmittedFormsByDate();
  }

  getSubmittedFormsByDate = () => {
    fetch(`/api/getSubmittedFormsByDate/${new Date().toISOString().slice(0, 10)}`)
    .then(res => res.json())
    .then((todaysForms) => {
      this.setState({
        todaysForms: todaysForms,
        isLoading: false
      })
    })
  }

  getUniqueJobsArray = () => {
    let jobIdArray = [...new Set(this.state.todaysForms.map(item => item.jobId))]
    console.log("JOBIDARRAY",jobIdArray)
    jobIdArray.forEach((item) => {
      this.state.uniqueJobs.push(uniqueJobsArray(item, this.state.todaysForms));
    })
  }

  render() { 
    
    if (this.state.isLoading) {
      return <LoadingProgress />
    } else {
        this.getUniqueJobsArray()

      const todaysFormsNumber = (
        <Typography style={{color:"orange", display:"inline"}} variant="display3" gutterBottom align="center">
          {this.state.todaysForms.length}
        </Typography>
      )
      const todaysJobsNumber = (
        <Typography style={{color:"orange", display:"inline"}} variant="display3" gutterBottom align="center">
          {this.state.uniqueJobs.length}
        </Typography>
      )

      const todaysForms = (
        <div style={{width:'75%', margin: 'auto'}} className="form-container">
          <Table selectable={false} style={{textAlign: 'left'}}>
            <TableHeader displaySelectAll={false}>
              <TableRow displayRowCheckbox={false}>
                <TableHeaderColumn>Form name</TableHeaderColumn>
                <TableHeaderColumn>View Form</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {this.state.todaysForms.map((form) => {
                return(
                  <TableRow key={form.formId}>
                    <TableRowColumn>{form.type}</TableRowColumn>
                    <TableRowColumn><Link style={{textDecoration: 'none'}} to={`/form_submissions/${form.formId}`}><FlatButton backgroundColor="orange">View</FlatButton></Link></TableRowColumn>
                  </TableRow>
                )})
                }
            </TableBody>
          </Table>
        </div>
      )

      const todaysJobs = (
        <div style={{width:'75%', margin: 'auto'}} className="form-container">
          <Table style={{textAlign: 'left'}}>
            <TableHeader displaySelectAll={false}>
              <TableRow displayRowCheckbox={false}>
                <TableHeaderColumn>Job Name</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} >
              {this.state.uniqueJobs.map((job) => {
                return(
                  <TableRow displayRowCheckbox={false} key={job.job_id}>
                    <TableRowColumn>{job.name}</TableRowColumn>
                  </TableRow>
                )
              })}
              </TableBody>
          </Table>
        </div>
      )

      return (
        <div>
          <Header />
          <br/>
          <SimpleGrow todaysForms={todaysForms} todaysJobs={todaysJobs} todaysFormsNumber={todaysFormsNumber} todaysJobsNumber={todaysJobsNumber}/>   
        </div>
      )
    }
  }
}


export default AdminDashboard;