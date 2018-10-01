import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HoursNameSearchResults extends Component {

  render() {

    return (
      <div>
        {this.props.names.length > 0 ? (
          <div>
            <h2>Search Results ({this.props.names.length})</h2>
            <table>
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Hours Worked</th>
                  <th>Shifts Worked</th>
                  <th>View Employee</th>
                </tr>
              </thead>
              <tbody>
                {this.props.names.map((item) =>
                  <tr key={item.user_id}>
                    <td>{item.first_name} {item.last_name}</td>
                    <td>{Math.floor((item.minutes_worked)/60)}</td>
                    <td>{item.shift_count}</td>
                    <td>{<Link to={`/users/${item.user_id}`} target="_blank">Go</Link>}</td>
                  </tr>
                )}
              </tbody>
            </table>
            </div>
          ) : (<h2>No Results</h2>)}          
      </div>
    ) 
    }
  }

export default HoursNameSearchResults
