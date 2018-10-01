import React, { Component } from 'react'
import UserSearchResults from './UserSearchResults'
import CustomizedInputs from './Input'

class UserSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    }
  }

  filterItems = () => {
    let array = [];
    this.props.data.forEach((item) => {
      if ( item.first_name.toLowerCase().includes(this.state.query.toLowerCase()) || item.last_name.toLowerCase().includes(this.state.query.toLowerCase())) {
          array.push(item);
        }
    })
    return array;
  }

  getInfo = () => {
    this.setState({
      results: this.filterItems()
    })
  }

  handleInputChange = (value) => {
    setTimeout(() => {
      this.setState({
        query: value
      }, () => {
        this.getInfo();
        if (this.state.query.length > 0) {
          this.props.handleSearchQuery(true)
        } else {
          this.props.handleSearchQuery(false)
        }
      })
    }, 300);
  }

  handleSubmit = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  render() {
    return (
      <form>
        <CustomizedInputs
          setParentValue={this.handleInputChange}
          style={{display: "block"}}
          onKeyPress={this.handleSubmit}
        />
        {this.state.query && <UserSearchResults users={this.state.results} />}
      </form>
    )
  }
}

export default UserSearch;