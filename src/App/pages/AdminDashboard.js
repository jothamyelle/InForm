import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../Spinner';
import { uniqueJobsArray } from '../../helpers/unique_jobs';

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
      return <LoadingSpinner />
    } else {
      return (
        <div>
          {this.getUniqueJobsArray()}
          <h1> Good Morning Ben. Currently {this.state.todaysForms.length} forms 
          from {this.state.uniqueJobs.length} active jobs </h1>
          <h2> Today's Forms ({this.state.todaysForms.length}) </h2>
          <div className="form-container">
            <table>
              <thead>
                <tr>
                  <th>Form name</th>
                  <th>View Form</th>
                </tr>
              </thead>
              {this.state.todaysForms.map((form) => {
                return(
                  <tbody key={form.formId}>
                    <tr>
                      <td>{form.type}</td>
                      <td><button>View</button></td>
                    </tr>
                  </tbody>
                )
              })}
            </table>
          </div>
          <h2> Today's Active Jobs ({[...new Set(this.state.todaysForms.map(item => item.name))].length}) </h2>
          <div className="form-container">
            <table>
              <thead>
                <tr>
                  <th>Job Name</th>
                  <th>More Info</th>
                </tr>
              </thead>
              {this.state.uniqueJobs.map((job) => {
                return(
                  <tbody key={job.job_id}>
                    <tr>
                      <td>{job.name}</td>
                      <td><button>View</button></td>
                    </tr>
                  </tbody>
                )
              })}
            </table>
          </div>
        </div>
      )
    }
  }
}

export default AdminDashboard;