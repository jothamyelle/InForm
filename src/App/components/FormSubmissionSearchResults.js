import React, { Component } from 'react'
import FormSubmissionsStyles from '../pages/FormSubmissions/FormSubmissionsStyles.css'
import Typography from '@material-ui/core/Typography';
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

class FormSubmissionSearchResults extends Component {

  render() {
    const options = this.props.results.map(item => (
          <TableRow key={item.submitted_forms_id} displaySelectAll={false}>
            <TableRowColumn style={{fontSize:17}}>{item.type}</TableRowColumn>
            <TableRowColumn style={{fontSize:17}}>{item.job_name}</TableRowColumn>
            <TableRowColumn style={{fontSize:17}}>{item.first_name} {item.last_name}</TableRowColumn>
            <TableRowColumn style={{fontSize:17}}><FlatButton backgroundColor={orange300}>View</FlatButton></TableRowColumn>
            <TableRowColumn style={{fontSize:17}}><FlatButton backgroundColor="lightgrey">Delete</FlatButton></TableRowColumn>
          </TableRow>
    ))

    return (
      <div className={FormSubmissionsStyles.tableContainer}>
        <Typography variant="display2" gutterBottom align="center">
        Search Results
        </Typography>
        <Table selectable={false} className={FormSubmissionsStyles.formsTable}>
          <TableHeader displaySelectAll={false}>
            <TableHeaderColumn style={{fontSize:30}}>Form Name</TableHeaderColumn>
            <TableHeaderColumn style={{fontSize:30}}>Job</TableHeaderColumn>
            <TableHeaderColumn style={{fontSize:30}}>Employee</TableHeaderColumn>
            <TableHeaderColumn style={{fontSize:30}}>View</TableHeaderColumn>
            <TableHeaderColumn style={{fontSize:30}}>Delete</TableHeaderColumn>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {options}
          </TableBody>
          </Table>
        </div>          
      )
  }
}

export default FormSubmissionSearchResults
