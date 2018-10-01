import React, { Component } from 'react'
import FormSubmissionsStyles from '../pages/FormSubmissions/FormSubmissionsStyles.css'
import Typography from '@material-ui/core/Typography';

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
            <TableRowColumn>{item.type}</TableRowColumn>
            <TableRowColumn>{item.job_name}</TableRowColumn>
            <TableRowColumn>{item.first_name} {item.last_name}</TableRowColumn>
            <TableRowColumn><FlatButton backgroundColor="orange">View</FlatButton></TableRowColumn>
            <TableRowColumn><FlatButton backgroundColor="lightgrey">Delete</FlatButton></TableRowColumn>
          </TableRow>
    ))

    return (
      <div className={FormSubmissionsStyles.tableContainer}>
        <Typography variant="display2" gutterBottom align="center">
        Search Results
        </Typography>
        <Table selectable={false} className={FormSubmissionsStyles.formsTable}>
          <TableHeader displaySelectAll={false}>
            <TableRow displaySelectAll={false}>
              <TableHeaderColumn>Form Name</TableHeaderColumn>
              <TableHeaderColumn>Job</TableHeaderColumn>
              <TableHeaderColumn>Employee</TableHeaderColumn>
              <TableHeaderColumn>View</TableHeaderColumn>
              <TableHeaderColumn>Delete</TableHeaderColumn>
            </TableRow>
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
