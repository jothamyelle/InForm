import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Spinner';



class Hours extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      hours: null
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getAllEmployeesHours();
  }

  getAllEmployeesHours = () => {
    fetch('/api/getAllEmployeesHours')
    .then(res => res.json())
    .then((hours) => {
      this.setState({
        hours: hours,
        isLoading: false,
        startDate: null,
        endDate: null
      })
    })
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingSpinner />
    } else {
      return (
        <div>
          <h1> Hours </h1>
          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Hours Worked</th>
              </tr>
            </thead>
            <tbody>
              {this.state.hours.map((item) => {
                return(
                  <tr>
                    <td>{item.first_name} {item.last_name}</td>
                    <td>{Math.floor((item.minutes_worked)/60)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    }
  }
}
export default Hours;