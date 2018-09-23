import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: [],
      isLoading: false
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.setState({ isLoading: true })
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getEmployees')
    .then(res => res.json())
    .then(list => this.setState({ list: list, isLoading: false }))
  }

  render() {
    const { list, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div className="App">
      <Link to={'./'}>
        <button variant="raised">
            Home
        </button>
      </Link>
        <h1>List of Employees</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default List;