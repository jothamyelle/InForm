import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userMinutesWorkedSum } from '../../../helpers/hours';
import HoursNameSearch from '../../components/HoursNameSearch';
import TemporaryDrawer from '../Drawer';

class Hours extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      currentFilterHours: null,
      startDate: null,
      endDate: null,
      currentQuery: false
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
    this.getHoursFromDateFilters(this.state.startDate, this.state.endDate);
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
          <TemporaryDrawer />
          <HoursNameSearch handleSearchQuery={this.handleSearchQuery} data={uniqueUsersArray}/>
          {!currentQuery && (
            (uniqueUsersArray.length > 0) ? (
              <div>
                <h2>Filter Results</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Employee Name</th>
                      <th>Hours Worked</th>
                      <th>Shifts Worked</th>
                      <th>View Employee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {uniqueUsersArray.map((item) =>
                      <tr key={item.user_id}>
                        <td>{item.first_name} {item.last_name}</td>
                        <td>{Math.floor((item.minutes_worked)/60)}</td>
                        <td>{item.shift_count}</td>
                        <td>{<Link to={`/users/${item.user_id}`} target="_blank">Go</Link>}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            ) : (<h2>No results from this time period</h2>)
          )}
        </div>
      )
    }
  }

  render() {
      return (
        <div>
          <Link to={'./'}>
            <button variant="raised">
              Home
            </button>
          </Link>
          <br/>
          <h1> Hours </h1>
          <div>
            <form onSubmit={this.handleSubmit}>
              <span>
                Start Date
                <input onChange={this.handleStartDate} id="startDate" className="searchDate" type="date"/>
              </span>
              <span>
                End Date
                <input onChange={this.handleEndDate} id="endDate" className="searchDate" type="date"/>
              </span>
              <button type="submit">Search</button>
            </form>
          </div>
          <br/>
          { this.renderRows() }
        </div>
      )
    }
}

export default Hours;