import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../components/Search';

class FormSubmissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      error: null
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getFormSubmissions();
  }

  getFormSubmissions = () => {
    fetch('/api/getFormSubmissions')
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
    return (
      <div>
        <Link to={'./'}>
          <button variant="raised">
            Home
          </button>
        </Link>
        <h1>Form Submissions</h1>
        <Search data={this.state.list}/>
        <h2>Today's Submissions </h2>
      </div>
    )
  }
}

export default FormSubmissions;