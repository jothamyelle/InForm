import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import JobsStyles from '../pages/Jobs/JobsStyes.css'
import { orange300 } from 'material-ui/styles/colors';


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
                  <TableHeaderColumn style={{fontSize:30}}>Name</TableHeaderColumn>
                  <TableHeaderColumn style={{fontSize:30}}>Address</TableHeaderColumn>
                  <TableHeaderColumn style={{fontSize:30}}>Job Number</TableHeaderColumn>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  {this.props.jobs.map((item) => {
                    return (
                      <TableRow>
                        <TableRowColumn style={{fontSize:24}}>{item.name}</TableRowColumn>
                        <TableRowColumn style={{fontSize:24}}>{item.address}</TableRowColumn>
                        <TableRowColumn style={{fontSize:24}}>{item.job_number}</TableRowColumn>
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
