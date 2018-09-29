import React, { Component } from 'react'

class FormSubmissionSearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const options = this.props.results.map(item => (
          <tr key={item.submitted_forms_id}>
            <td>{item.date_updated}</td>
            <td>{item.first_name} {item.last_name}</td>
            <td>{item.type}</td>
            <td>{item.job_name}</td>
          </tr>
    ))

    return (
      <div>
        <h2>Search Results:</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>User</th>
              <th>Form Name</th>
              <th>Job Name</th>
            </tr>
          </thead>
          <tbody>
            {options}
          </tbody>
          </table>
        </div>          
      )
  }
}

export default FormSubmissionSearchResults
