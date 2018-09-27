import React, { Component } from 'react'

class JobSearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
        return (
          <div>
            <h2>{this.props.jobs.length} Results</h2>
            <table>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Job Number</th>
                  <th>More Information</th>
                </tr>
            </thead>
              {/* Render the list of items */}
              {this.props.jobs.map((item) => {
                return (
                  <tbody key={item.id}>
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.job_number}</td>
                      <td><button>view</button></td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
      );
    }
  }

export default JobSearchResults
