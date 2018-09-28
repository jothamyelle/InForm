import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../Spinner';
import JobSearch from '../components/JobSearch';

class Jobs extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      error: null,
      list: [],
      isLoading: false,
      currentQuery: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getJobs')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoading: false,
          list: result
        });
      },
      (error) => {
        this.setState({
          isLoading: false,
          error
        });
      }
    )
  }

  handleSearchQuery = (doesQueryExist) => {
    this.setState(prevState => ({
      currentQuery: doesQueryExist
    }));
  }

  getActiveJobCount = () => {
    let count = 0;
    this.state.list.forEach((item) => {
      if (item.active) {
        count++
      }
    })
    return count;
  }

  getInactiveJobCount = () => {
    let count = 0;
    this.state.list.forEach((item) => {
      if (!item.active) {
        count++
      }
    })
    return count;
  }

  render() {
    const { error, list, isLoading, currentQuery } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoading) {
      return <LoadingSpinner />
    } else {
      return (
        <div className="App">
          <Link to={'./'}>
            <button variant="raised">
              Home
            </button>
          </Link>
          <h1>Jobs</h1>
          <JobSearch  handleSearchQuery={this.handleSearchQuery} data={list}/>
          {!currentQuery && (
            <div>
            <h2>All Jobs</h2>
            <h2>Active Jobs ({this.getActiveJobCount()})</h2>
            <table>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Job Number</th>
                  <th>More Information</th>
                </tr>
            </thead>
              {list.map((item) => {
                  return ((item.active) && (
                    <tbody key={item.id}>
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.job_number}</td>
                        <td><button>view</button></td>
                      </tr>
                    </tbody>
                  ))
              })}
              </table>
              <h2>Inactive Jobs ({this.getInactiveJobCount()})</h2>
              {this.getInactiveJobCount() > 0 && (
              <table>
                <thead>
                    <tr>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Job Number</th>
                      <th>More Information</th>
                    </tr>
                </thead>
              {list.map((item) => {
                  return ((!item.active) && (
                    <tbody key={item.id}>
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.job_number}</td>
                        <td><button>view</button></td>
                      </tr>
                    </tbody>
                  ))
              })}
            </table>
              )}
            </div>
          )}
        </div>
      )
    }
  }
}

export default Jobs;