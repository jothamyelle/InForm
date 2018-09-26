import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../Spinner';

class AdminDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      todaysForms: null
    }
  }

  formatDate = (value) => {
    console.log('GETMONTH', value.getMonth())
    return value.getFullYear() + "-" + value.getMonth()+1 + "-" + value.getDate();
    
  }

  componentDidMount() {
    this.getSubmittedFormsByDate();
  }

  getSubmittedFormsByDate = () => {
    fetch(`/api/getSubmittedFormsByDate/${new Date().toISOString().slice(0, 10)}`)
    .then(res => res.json())
    .then((todaysForms) => {
      this.setState({
        todaysForms: todaysForms,
        isLoading: false
      })
    })
  }

  render() { 
    if (this.state.isLoading) {
      return <LoadingSpinner />
    } else {
      return(
        <div>
          <h1>Admin Dashboard</h1>
          <h2>Good Morning, Ben Currently 3 submitted forms from 2 jobs today</h2>
        </div>
      )
    }
  }
}

export default AdminDashboard;