import React, { Component } from 'react'
import FormSubmissionSearchResults from './FormSubmissionSearchResults'
import CustomizedInputs from './Input'

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

  handleInputChange = (value) => {
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
        {this.state.query && <FormSubmissionSearchResults results={this.state.results} />}
      </form>
    )
  }
}

export default Search;