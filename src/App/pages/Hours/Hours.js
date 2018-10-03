import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userMinutesWorkedSum } from '../../../helpers/hours';
import HoursNameSearch from '../../components/HoursNameSearch';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker} from 'react-dates';
import Typography from '@material-ui/core/Typography';
import JobsStyles from '../Jobs/JobsStyes.css'
import HoursStyles from './HoursStyles.css'
import { orange300 } from 'material-ui/styles/colors';
import Footer from '../Footer/Footer'
import Header from '../Header/Header';


import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

class Hours extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      currentFilterHours: null,
      currentQuery: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  handleStartDate = (event) => {
    this.setState({ startDate: event.target.value })
  }
  
  handleEndDate = (event) => {
    this.setState({ endDate: event.target.value })
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    let sDate =  this.state.startDate._d.toISOString()
    let eDate =  this.state.endDate._d.toISOString()
    console.log('StartDate', sDate)
    console.log('EndDate', eDate)
    this.getHoursFromDateFilters(this.state.startDate._d.toISOString(), this.state.endDate._d.toISOString());
  }

  getHoursFromDateFilters = (date1, date2) => {
    this.setState({isLoading:true})
    fetch(`/api/getHoursFromDateFilters/${date1}/${date2}`)
    .then(res => res.json())
    .then((currentFilterHours) => {
      this.setState({
        currentFilterHours: currentFilterHours,
        isLoading: false,
      })
    }) // TODO - add error handling here
  }

  handleSearchQuery = (doesQueryExist) => {
    this.setState(prevState => ({
      currentQuery: doesQueryExist
    }));
  }


  renderRows(){
    const { currentFilterHours, currentQuery } = this.state;
    let uniqueUsersArray = [];

    if (currentFilterHours){
      const userIdArray = [...new Set(currentFilterHours.map(item => item.id))];

      userIdArray.forEach((item) => {
        uniqueUsersArray.push(userMinutesWorkedSum(item, currentFilterHours));
      })
    
      return (
        <div>
          <div className={JobsStyles.searchBox}>
            <HoursNameSearch handleSearchQuery={this.handleSearchQuery} data={uniqueUsersArray}/>
            <br/>
            <br/>
          </div>
          {!currentQuery && (
            (uniqueUsersArray.length > 0) ? (
              <div>
                <br/>
                <br/>
                <Table selectable={false} className={JobsStyles.formsTable}>
                  <TableHeader displaySelectAll={false}>
                    <TableHeaderColumn style={{fontSize:30}}>Employee Name</TableHeaderColumn>
                    <TableHeaderColumn style={{fontSize:30}}>Hours Worked</TableHeaderColumn>
                    <TableHeaderColumn style={{fontSize:30}}>Shifts Worked</TableHeaderColumn>
                    <TableHeaderColumn style={{fontSize:30}}>View Employee</TableHeaderColumn>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    {uniqueUsersArray.map((item) =>
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
            ) : (<Typography variant="display2" gutterBottom align="center">No Results</Typography>)
          )}
        </div>
      )
    }
  }

  render() {
      return (
        <div>
          <Header />
          <br/>
          <Typography variant="display3" gutterBottom align="center">
            Hours
          </Typography>
          {((this.state.currentFilterHours || this.state.currentQuery) ? (
          <div className={JobsStyles.searchBox} style={{height: "100vh"}}>
            <form onSubmit={this.handleSubmit}>
              <DateRangePicker
                className={HoursStyles.CalendarDay__selected}
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                isOutsideRange = {() => false}
              />
              <br/>
              <br/>
              <FlatButton type="submit" backgroundColor={orange300}>Filter</FlatButton>
            </form>
            <br/>
            <br/>
            { this.renderRows() }
          </div>
          ) : (
          <div className={JobsStyles.searchBox} style={{height: "100vh"}}>
          <form onSubmit={this.handleSubmit}>
            <DateRangePicker
              className={HoursStyles.CalendarDay__selected}
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              isOutsideRange = {() => false}
            />
            <br/>
            <br/>
            <FlatButton type="submit" backgroundColor={orange300}>Filter</FlatButton>
          </form>
          <br/>
          <br/>
          { this.renderRows() }
        </div>
        ))}
          <br/>
          <Footer/>
        </div>
      )
    }
}

export default Hours;