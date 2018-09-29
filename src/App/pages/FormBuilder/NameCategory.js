import React, { Component } from 'react'
import axios from 'axios';

class NameCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      categories: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit() {
    console.log("Hello")
  }

  componentWillMount() {

    axios.get('/api/getFormtemplateCategories')
      .then(response => {

        response.data.forEach(category => {
          this.setState(prevState => ({
            categories: [...prevState.categories, category.name]
          }))
          console.log(this.state.categories);
          
        })
      })
  }


  render() {

    return (
        <div>
          <h2>Build a Form:</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text"/>
            <label>Category</label>
            <select>{this.state.categories.map(category => <option key={category}>{category}</option>)}</select>
            <input type="Submit"/>
          </form>
        </div>
      )
  }
}

export default NameCategory;
