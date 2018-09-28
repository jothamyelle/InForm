import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../components/Search';

class FormSubmissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      thisWeeksForms: null,
      error: null
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getFormSubmissions();
  }

  
  getFormSubmissions = () => {

    const date = new Date();
    date.setDate(date.getDate() - 7);
    const date1 = date.toISOString().slice(0, 10);

    const today = new Date();
    const date2 = today.toISOString().slice(0, 10);

    // const date2 = oneWeekAgo.getDate().toISOString().slice(0, 10);
    Promise.all([
      fetch('/api/getFormSubmissions'),
      // insert this as param into getformsubmissionsbydate - new Date().toISOString().slice(0, 10)
      fetch(`/api/getFormSubmissionsFromLastWeek/${date1}/${date2}`)
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([forms, thisWeeksForms]) => {
      this.setState({
        isLoading: false,
        list: forms,
        thisWeeksForms: thisWeeksForms
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
        <h2>Submissions this week:</h2>
        {this.state.thisWeeksForms && this.state.thisWeeksForms.reverse().map((form) => {
          return (
            <div>
            <h3>{new Date(form.date_created).toISOString().slice(0, 10)}</h3>
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
                </table>
              </div>
          )
        })}
      </div>
    )
  }
}

export default FormSubmissions;