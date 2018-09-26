import React, { Component } from 'react'

class FormSubmissionSearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const options = this.props.results.map(item => (
        <tbody key={item.id}>
          <tr>
            <td>{item.date_updated}</td>
            <td>{item.first_name} {item.last_name}</td>
            <td>{item.type}</td>
            <td>{item.job_name}</td>
          </tr>
        </tbody>
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
          {options}
          </table>
        </div>          
      )
  }
}

export default FormSubmissionSearchResults
