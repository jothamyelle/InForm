import React, { Component } from 'react'

class JobSearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
        return (
          <div>
          {this.props.jobs.length > 0 ? (
            <div>
              <h2>Search Results ({this.props.jobs.length})</h2>
              <table>
              <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Job Number</th>
                    <th>More Information</th>
                  </tr>
              </thead>
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
        ) : (<h2>No results</h2>)}
        </div>
      );
    }
  }

export default JobSearchResults
