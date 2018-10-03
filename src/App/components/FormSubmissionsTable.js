import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
// import TableCell from '@material-ui/core/TableCell';
import { orange300, orange400, } from 'material-ui/styles/colors';
import Typography from '@material-ui/core/Typography';
import FormSubmissionsStyles from '../pages/FormSubmissions/FormSubmissionsStyles.css'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

const styles = theme => ({
  root: {
    width: '80%',
    margin: 'auto',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:hover': {
      backgroundColor: orange300
    }, 
  },
  button:{
    color: orange400,
  },
});

class FormSubmissionsTable extends Component {
  render() {
    const {  dateArray, thisWeeksForms } = this.props;
    const today = (
      <Typography variant="display2" gutterBottom align="center">
        Today
      </Typography>
    )
    const weeksDate = (item) => (
      <Typography variant="display2" gutterBottom align="center">
        {new Date(item).toISOString().slice(0, 10)}
      </Typography>
    )
    return(
      <div>
      {dateArray.map((item) => {
        return (
      <div className={FormSubmissionsStyles.tableContainer} key={item}>
        {(new Date(item).toISOString().slice(0, 10) == new Date().toISOString().slice(0, 10)) ? (today) : (weeksDate(item))}
        <Table selectable={false} className={FormSubmissionsStyles.formsTable}>
          <TableHeader displaySelectAll={false}>
              <TableHeaderColumn style={{fontSize:30}}>Form Name</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:30}}>Job</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:30}}>Employee</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:30}}></TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:30}}></TableHeaderColumn>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {thisWeeksForms && thisWeeksForms.reverse().map((form) => {
              return ( new Date(form.submitted_forms_date_created).toISOString().slice(0, 10) == new Date(item).toISOString().slice(0, 10) && (
                <TableRow key={form.submitted_forms_id}>
                  <TableRowColumn style={{fontSize:17}}>{form.type}</TableRowColumn>
                  <TableRowColumn style={{fontSize:17}}>{form.job_name}</TableRowColumn>
                  <TableRowColumn style={{fontSize:17}}><Link style={{textDecoration: 'none'}} to={`/users/${form.user_id}`}>{form.first_name} {form.last_name}</Link></TableRowColumn>
                  <TableRowColumn style={{fontSize:17}}><Link style={{textDecoration: 'none'}} to={`/form_submissions/${form.submitted_forms_id}`}><FlatButton backgroundColor={orange300}>View</FlatButton></Link></TableRowColumn>
                  <TableRowColumn style={{fontSize:17}}><FlatButton backgroundColor="lightgrey">Delete</FlatButton></TableRowColumn>
                </TableRow>
                )
              )
            })}
          </TableBody>
        </Table>
        <br/>
        <br/>
        </div>
      )
    })}
    </div>
    )
}
}

FormSubmissionsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormSubmissionsTable);