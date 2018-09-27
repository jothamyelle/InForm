import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userMinutesWorkedSum } from '../../../helpers/hours';
import LoadingSpinner from '../../Spinner';
import HoursNameSearch from '../../components/HoursNameSearch';

class Hours extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      currentFilterHours: null,
      startDate: null,
      endDate: null
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

  renderRows(){
    const { currentFilterHours } = this.state;
    let uniqueUsersArray = [];

    if (currentFilterHours){
      const userIdArray = [...new Set(currentFilterHours.map(item => item.id))];

      userIdArray.forEach((item) => {
        uniqueUsersArray.push(userMinutesWorkedSum(item, currentFilterHours));
      })
    
      return (
        <div>
          <HoursNameSearch data={uniqueUsersArray}/>
          <br/>
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
      )
    }
  }

  render() {
      return (
        <div>
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