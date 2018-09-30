import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../Spinner';
import { uniqueJobsArray } from '../../helpers/unique_jobs';
import RaisedButton from 'material-ui/RaisedButton';
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
      return (
        <div>
          <TemporaryDrawer />
          {this.getUniqueJobsArray()}
          <Typography variant="display3" gutterBottom align="center">
            Good Morning Ben. Currently {this.state.todaysForms.length} forms 
            from {this.state.uniqueJobs.length} active jobs
          </Typography>
          <Typography variant="display2" gutterBottom align="center">
          Today's Forms ({this.state.todaysForms.length}) 
        </Typography>
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
                      <TableRowColumn><FlatButton backgroundColor={orange300}>View</FlatButton></TableRowColumn>
                    </TableRow>
                  )})
                  }
              </TableBody>
            </Table>
          </div>
          <Typography variant="display2" gutterBottom align="center">
            Today's Active Jobs ({[...new Set(this.state.todaysForms.map(item => item.name))].length}) 
          </Typography>
          <div style={{width:'75%', margin: 'auto'}} className="form-container">
            <Table>
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
        </div>
      )
    }
  }
}


export default AdminDashboard;