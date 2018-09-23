import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AwesomeComponent from '../Spinner';

class User extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      error: null,
      list: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getUsers')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoading: false,
          list: result
        });
      },
      (error) => {
        this.setState({
          isLoading: false,
          error
        });
      }
    )
  }

  render() {
    const { error, list, isLoading } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoading) {
      return <AwesomeComponent />
    } else {
      return (
        <div className="App">
          <Link to={'./'}>
            <button variant="raised">
              Home
            </button>
          </Link>
          <h1>List of Users</h1>
          {/* Check to see if any items are found*/}
          {list.length > 0 ? (
            <table>
              <tr>
                <th>First Name</th>
                <th>Surname</th>
                <th>Email</th>
              </tr>
              {/* Render the list of items */}
              {list.map((item) => {
                return (
                  <tr>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                  </tr>
                );
              })}
            </table>
          ) : (
            <div>
              <h2>No List Items Found</h2>
            </div>
          )
          }
        </div>
      )
    }
  }
}

export default User;