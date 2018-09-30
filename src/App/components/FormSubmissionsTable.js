import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { orange400 } from 'material-ui/styles/colors';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: orange400,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


class FormSubmissionsTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, dateArray, thisWeeksForms } = this.props;
    const today = (
      <Typography variant="display1" gutterBottom align="left">
        Today
      </Typography>
    )
    const weeksDate = (item) => (
      <Typography variant="display1" gutterBottom align="left">
        {new Date(item).toISOString().slice(0, 10)}
      </Typography>
    )
    return(
      <div>
      {dateArray.map((item) => {
        return (
      <div key={item}>
          {(new Date(item).toISOString().slice(0, 10) == new Date().toISOString().slice(0, 10)) ? (today) : (weeksDate(item))}
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Form Name</CustomTableCell>
            <CustomTableCell>Job</CustomTableCell>
            <CustomTableCell>Employee</CustomTableCell>
            <CustomTableCell>View</CustomTableCell>
            <CustomTableCell>Edit</CustomTableCell>
            <CustomTableCell>Delete</CustomTableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {thisWeeksForms && thisWeeksForms.map((form) => {
              return ( new Date(form.submitted_forms_date_created).toISOString().slice(0, 10) == new Date(item).toISOString().slice(0, 10) && (
                <TableRow key={form.submitted_forms_id}>
                  <CustomTableCell>{form.type}</CustomTableCell>
                  <CustomTableCell>{form.job_name}</CustomTableCell>
                  <CustomTableCell><Link to={`/users/${form.user_id}`} target="_blank">{form.first_name} {form.last_name}</Link></CustomTableCell>
                  <CustomTableCell>View</CustomTableCell>
                  <CustomTableCell>Edit</CustomTableCell>
                  <CustomTableCell><Button><DeleteIcon /></Button></CustomTableCell>
                </TableRow>
                )
              )
            })}
          </TableBody>
        </Table>
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