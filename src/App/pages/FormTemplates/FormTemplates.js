import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Spinner';
import FormTemplateStyles from './FormTemplateStyles.css';

class FormTemplate extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      categories: null,
      templates: null
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getTemplatesAndCategories();
  }

  getTemplatesAndCategories = () => {
    Promise.all([
      fetch('/api/getFormtemplateCategories'),
      fetch('/api/getFormTemplates')
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([categories, templates]) => {
      this.setState({
        categories: categories,
        templates: templates,
        isLoading: false
      })
    })
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingSpinner />
    } else {
      return(
        <div className="App">
          <Link to={'./'}>
            <button variant="raised">
              Home
            </button>
          </Link>
          {this.state.categories.map((category) => {
            return(  
              <div>
                <h2>{category.name}</h2>
                <div className="form-container">
                  <table>
                    <tr>
                      <th>Form name</th>
                      <th>Fill Out</th>
                      <th>Edit Template</th>
                      <th>Delte Template</th>
                    </tr>
                    {this.state.templates.map((template) => {
                      if(template.form_category_id === category.id)
                      return (
                        <tr>
                          <td>{template.type}</td>
                          <td><button>Fill Out</button></td>
                          <td><button>Edit</button></td>
                          <td><button>Delete</button></td>
                        </tr>
                      )
                    })}
                  </table>
                </div>
              </div>
            )
          })}
        </div>
      )
    }
  }
}

export default FormTemplate;