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
              <TableHeaderColumn style={{fontSize:30}}>Employee Name</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:30}}>Hours Worked</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:30}}>Shifts Worked</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:30}}>View Employee</TableHeaderColumn>
              <TableBody displayRowCheckbox={false}>
                {this.props.names.map((item) =>
                  <TableRow key={item.user_id}>
                    <TableRowColumn style={{fontSize:17}}>{item.first_name} {item.last_name}</TableRowColumn>
                    <TableRowColumn style={{fontSize:17}}>{Math.floor((item.minutes_worked)/60)}</TableRowColumn>
                    <TableRowColumn style={{fontSize:17}}>{item.shift_count}</TableRowColumn>
                    <TableRowColumn style={{fontSize:17}}>{<Link to={`/users/${item.user_id}`} target="_blank"><FlatButton backgroundColor={orange300}>Go</FlatButton></Link>}</TableRowColumn>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          ) : (
            <div>
              <br/>
              <br/>
              <Typography variant="display2" gutterBottom align="center">
                No Results
              </Typography>
            </div>)}          
      </div>
    ) 
    }
  }

export default HoursNameSearchResults
