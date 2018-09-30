import React, { Component } from 'react'
import JobSearchResults from './JobSearchResults'
import Input from '@material-ui/core/Input';
import JobsStyles from '../pages/Jobs/JobsStyes.css'
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
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
      {/* <TextField
      hintText="Search for jobs"
      floatingLabelText="Search for jobs"
    /> */}
        <Input
          placeholder="Search for..."
          inputRef={Input => this.search = Input}
          onKeyUp={this.handleInputChange}
          onKeyPress={this.handleSubmit}
          hintText="Search for jobs"
      floatingLabelText="Search for jobs"
      className={JobsStyles.textField}
        />
        {this.state.query && <JobSearchResults jobs={this.state.results} />}
      </form>
    )
  }
}

export default JobSearch;