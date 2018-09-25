import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Spinner';

class Hours extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      filteredHoursLoaded: false,
      hours: null,
      currentFilterHours: null,
      startDate: null,
      endDate: null
    }
  }

  componentDidMount() {
    this.setState({ isLoading: false });
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
    })
  }



  renderRows(){
    function userMinutesSum (id, array) {
      let minutesWorkedCount = 0;
      let userObject = {
        user_id: id,
        shift_count: 0
      };
      for (let i = 0; i < array.length; i++ ){
        if (array[i].id === id) {
          minutesWorkedCount += array[i].minutes_worked;
          userObject.shift_count++;
          userObject['minutes_worked'] = minutesWorkedCount;
          userObject['first_name'] = array[i].first_name;
          userObject['last_name'] = array[i].last_name;
        }
      }
      return userObject;
    }

    let uniqueUsersArray = [];
    if (this.state.currentFilterHours){
      const userIdArray = [...new Set(this.state.currentFilterHours.map(item => item.id))]
      userIdArray.forEach((item) => {
        uniqueUsersArray.push(userMinutesSum(item, this.state.currentFilterHours))
      })
    

      return (
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
      )
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.getHoursFromDateFilters(this.state.startDate, this.state.endDate);
  }

  handleStartDate = (event) => {
    this.setState({startDate: event.target.value})
  }

  handleEndDate = (event) => {
    this.setState({endDate: event.target.value})
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
          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Hours Worked</th>
                <th>Shifts Worked</th>
                <th>View Employee</th>
              </tr>
            </thead>
              { this.renderRows() }
          </table>
        </div>
      )
    }
}

export default Hours;