import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import JobsStyles from '../pages/Jobs/JobsStyes.css'


import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

class JobSearchResults extends Component {

  render() {
        return (
          <div>
          {this.props.jobs.length > 0 ? (
            <div className={JobsStyles.tableContainer}>
              <Typography variant="display2" gutterBottom align="center">Search Results ({this.props.jobs.length})</Typography>
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
                  {this.props.jobs.map((item) => {
                    return (
                        <TableRow>
                          <TableRowColumn>{item.name}</TableRowColumn>
                          <TableRowColumn>{item.address}</TableRowColumn>
                          <TableRowColumn>{item.job_number}</TableRowColumn>
                          <TableRowColumn><FlatButton backgroundColor="orange">view</FlatButton></TableRowColumn>
                        </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
            </div>
        ) : (<Typography variant="display2" gutterBottom align="center">No results</Typography>)}
        </div>
      );
    }
  }

export default JobSearchResults
