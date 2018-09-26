import React, { Component } from 'react'
import SearchResults from './SearchResults'

class Search extends Component {
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
      if (JSON.stringify(Object.values(item)).toLowerCase().includes(this.state.query)) {
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
        <SearchResults results={this.state.results} />
      </form>
    )
  }
}

export default Search;