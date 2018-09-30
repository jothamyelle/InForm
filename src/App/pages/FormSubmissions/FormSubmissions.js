import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../components/Search';
import TemporaryDrawer from '../Drawer';

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
    today.setDate(today.getDate() + 2);
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
    const today = new Date();
    const dateArray =[];

    for (let i = 0; i < 7; i++){
      let tempDate = new Date();
      tempDate.setDate(tempDate.getDate()-i);
      dateArray.push(tempDate);  
    }


    return (
      <div>
        <TemporaryDrawer />
        <h1>Form Submissions</h1>
        <Search data={this.state.list}/>
        <h2>Submissions this week:</h2>
        {dateArray.map((item) => {
          return(
          <div key={item}>
              {(new Date(item).toISOString().slice(0, 10) == today.toISOString().slice(0, 10)) ? (<h3>Today</h3>) : (<h3>{new Date(item).toISOString().slice(0, 10)}</h3>)}
          <table>
            <thead>
            <tr>
            </tr>
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
        {this.state.thisWeeksForms && this.state.thisWeeksForms.map((form) => {
          return ( new Date(form.submitted_forms_date_created).toISOString().slice(0, 10) == new Date(item).toISOString().slice(0, 10) && (
            <tr key={form.submitted_forms_id}>
              <td>{form.type}</td>
              <td>{form.job_name}</td>
              <td><Link to={`/users/${form.user_id}`} target="_blank">{form.first_name} {form.last_name}</Link></td>
              <td>Fill Out</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            )
          )
        })}
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