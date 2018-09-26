import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../components/Search';

class FormSubmissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      todaysForms: null,
      error: null
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getFormSubmissions();
  }

  
  getFormSubmissions = () => {
    Promise.all([
      fetch('/api/getFormSubmissions'),
      // insert this as param into getformsubmissionsbydate - new Date().toISOString().slice(0, 10)
      fetch(`/api/getFormSubmissionsByDate/${'2018-01-04'}`)
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([forms, todaysForms]) => {
      this.setState({
        isLoading: false,
        list: forms,
        todaysForms: todaysForms
      })
      },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render() {
    return (
      <div>
        <Link to={'./'}>
          <button variant="raised">
            Home
          </button>
        </Link>
        <h1>Form Submissions</h1>
        <Search data={this.state.list}/>
        <h2>Today's Submissions</h2>
        {/* break into component */}
        <table>
          <thead>
            <tr>
              <th>Form Name</th>
              <th>Job</th>
              <th>Employee</th>
              <th>Fill Out</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
        {this.state.todaysForms && this.state.todaysForms.map((form) => {
          return (
            <tbody>
              <tr>
                <td>{form.type}</td>
                <td>{form.job_name}</td>
                <td><Link to={`/users/${form.id}`} target="_blank">{form.first_name} {form.last_name}</Link></td>
                <td>Fill Out</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </tbody>
          )
        })}
          </table>
      </div>
    )
  }
}

export default FormSubmissions;