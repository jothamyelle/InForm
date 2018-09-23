import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AwesomeComponent from '../Spinner';

class Jobs extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: [],
      isLoading: false
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.setState({ isLoading: true });
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getJobs')
    .then(res => res.json())
    .then(list => this.setState({ list: list, isLoading: false }))
  }

  render() {
    const { list, isLoading } = this.state;
    if (isLoading) {
      return <AwesomeComponent />
    }
    
    return (
      <div className="App">
        <h1>List of Jobs</h1>
        {/* Check to see if any items are found*/}
        {list.length > 0 ? (
          <table>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Job Number</th>
          </tr>
            {/* Render the list of items */}
            {list.map((item) => {
              return(
                <tr>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.job_number}</td>
                </tr>
              );
            })}
          </table>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default Jobs;