import React, { Component } from 'react';
import AwesomeComponent from '../../Spinner';


class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      user: null
    }
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    this.getUserById(this.props.match.params.id);
  }

  getUserById = (id) => {
    fetch(`/api/getUser/${id}`)
    .then((res) => res.json())
    .then((result) => {
      this.setState({
        user: result,
        isLoading: false
      })
      console.log(result)
      console.log(this.state)
    })
  }

  render() {
    if (this.state.isLoading) {
      return <AwesomeComponent />
    } else {
      return (
        <div className="employeeContainer">
        <p>{this.state.user[0].email}</p>
        </div>
    )
  } 
  }
}

export default UserProfile