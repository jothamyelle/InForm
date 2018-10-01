import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import JobsStyles from '../pages/Jobs/JobsStyes.css';
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

class HoursNameSearchResults extends Component {

  render() {

    return (
      <div>
        {this.props.names.length > 0 ? (
          <div>
            <br/>
            <br/>
            <Typography variant="display2" gutterBottom align="center">
              Search Results
            </Typography>
            <Table selectable={false} className={JobsStyles.formsTable}>
              <TableHeader displaySelectAll={false}>
                <TableRow displayRowCheckbox={false}>
                  <TableHeaderColumn>Employee Name</TableHeaderColumn>
                  <TableHeaderColumn>Hours Worked</TableHeaderColumn>
                  <TableHeaderColumn>Shifts Worked</TableHeaderColumn>
                  <TableHeaderColumn>View Employee</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {this.props.names.map((item) =>
                  <TableRow key={item.user_id}>
                    <TableRowColumn>{item.first_name} {item.last_name}</TableRowColumn>
                    <TableRowColumn>{Math.floor((item.minutes_worked)/60)}</TableRowColumn>
                    <TableRowColumn>{item.shift_count}</TableRowColumn>
                    <TableRowColumn>{<Link to={`/users/${item.user_id}`} target="_blank"><FlatButton backgroundColor={orange300}>Go</FlatButton></Link>}</TableRowColumn>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          ) : (<h2>No Results</h2>)}          
      </div>
    ) 
    }
  }

export default HoursNameSearchResults
