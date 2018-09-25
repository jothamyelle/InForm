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
    if (this.state.currentFilterHours){
      return (
        <tbody>
          {this.state.currentFilterHours.map((item) =>
            <tr key={item.id}>
              <td>{item.first_name} {item.last_name}</td>
              <td>{Math.floor((item.minutes_worked)/60)}</td>
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
              </tr>
            </thead>
              { this.renderRows() }
          </table>
        </div>
      )
    }
}

export default Hours;