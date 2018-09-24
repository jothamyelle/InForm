import React, { Component } from 'react';

class UserRoles extends Component {

  render() { 
    const { userRolesList } = this.props;
      return (
        <div>
          <div className="filters">
            <h2>Filters</h2>
            <span className="textFilter">
              <input type="text" className="searchTerm" placeholder="Enter a search term"/>
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
              </button>
            </span>
            <span>
              <label htmlFor="category">Choose a category:</label>
              <select id="category">
                <option value="">--Please choose an option--</option>
              {userRolesList.map((item) => {
                return (
                  <option key={item.id} value='{item.role}'>{item.role}</option>
                )
              })}
              </select>
            </span>
          </div>
        </div>
      )
    }
  }


export default UserRoles