import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../Spinner';
import JobSearch from '../components/JobSearch';
import JobsStyles from './Jobs/JobsStyes.css'
import Typography from '@material-ui/core/Typography';
import TemporaryDrawer from './Drawer';


import TextField from 'material-ui/TextField';
import Drawer from '@material-ui/core/Drawer';


import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

class Jobs extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      error: null,
      list: [],
      isLoading: false,
      currentQuery: false,
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
        <div>
          <TemporaryDrawer />
          {/* <h1>Jobs</h1> */}
          <Typography variant="display4" gutterBottom align="center">
            Jobs
          </Typography>
          <div className={JobsStyles.searchBox}>
            <JobSearch handleSearchQuery={this.handleSearchQuery} data={list}/>
            <br/>
            <br/>
          </div>
          {!currentQuery && (
            <div className={JobsStyles.tableContainer}>
          <Typography variant="display2" gutterBottom align="center">
          Active Jobs ({this.getActiveJobCount()})
          </Typography>
            {/* <h2>Active Jobs ({this.getActiveJobCount()})</h2> */}
            <Table selectable={false} className={JobsStyles.formsTable}>
              <TableHeader displaySelectAll={false}>
                <TableRow displayRowCheckbox={false}>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Address</TableHeaderColumn>
                  <TableHeaderColumn>Job Number</TableHeaderColumn>
                  <TableHeaderColumn>More Information</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {list.map((item) => {
                  return ((item.active) && (
                    <TableRow>
                      <TableRowColumn>{item.name}</TableRowColumn>
                      <TableRowColumn>{item.address}</TableRowColumn>
                      <TableRowColumn>{item.job_number}</TableRowColumn>
                      <TableRowColumn><FlatButton backgroundColor="orange">View</FlatButton></TableRowColumn>
                    </TableRow>
                  ))
                  })}
              </TableBody>
            </Table>
            <br/>
            <br/>
              <Typography variant="display2" gutterBottom align="center">
                Inactive Jobs ({this.getInactiveJobCount()})
              </Typography>
              {/* <h2>Inactive Jobs ({this.getInactiveJobCount()})</h2> */}
              {this.getInactiveJobCount() > 0 && (
              <Table>
                <TableHeader displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Address</TableHeaderColumn>
                    <TableHeaderColumn>Job Number</TableHeaderColumn>
                    <TableHeaderColumn>More Information</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    {list.map((item) => {
                      return ((!item.active) && (
                        <TableRow key={item.id}>
                          <TableRowColumn>{item.name}</TableRowColumn>
                          <TableRowColumn>{item.address}</TableRowColumn>
                          <TableRowColumn>{item.job_number}</TableRowColumn>
                          <TableRowColumn><FlatButton backgroundColor="orange">View</FlatButton></TableRowColumn>
                        </TableRow>
                      ))
                    })}
                  </TableBody>
            </Table>
              )}
            </div>
          )}
        </div>
      )
    }
  }
}

export default Jobs;