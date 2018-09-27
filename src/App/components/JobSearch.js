import React, { Component } from 'react'
import JobSearchResults from './JobSearchResults'

class JobSearch extends Component {
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
      if ( item.name.toLowerCase().includes(this.state.query.toLowerCase()) ||
      item.address.toLowerCase().includes(this.state.query.toLowerCase()) ||
      item.job_number.toString().toLowerCase().includes(this.state.query)) {
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
    setTimeout(() => {
      this.setState({
        query: this.search.value
      }, () => {
        this.getInfo();
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
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onKeyUp={this.handleInputChange}
          onKeyPress={this.handleSubmit}
        />
        {this.state.query && <JobSearchResults jobs={this.state.results} />}
      </form>
    )
  }
}

export default JobSearch;