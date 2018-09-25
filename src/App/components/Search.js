import React, { Component } from 'react'
import Suggestions from './Suggestions'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    }
  }

  getInfo = () => {
    let filteredArray = this.props.data.filter((item) => {
      return JSON.stringify(item).toLowerCase().indexOf(this.state.query.toLowerCase()) > -1;
    })
    this.setState({
      results: filteredArray
    })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      this.getInfo();
  })
}

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onKeyUp={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search;