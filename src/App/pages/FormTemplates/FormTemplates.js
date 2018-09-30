import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Spinner';

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
          <h1> Form Templates </h1>
          <Link to={'./name_category'}>
            <button variant="raised">
              Create New Form Template
            </button>
          </Link>
          {this.state.categories.map((category) => {
            return(  
              <div key={category.id}>
                <h2>{category.name}</h2>
                <div className="form-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Form name</th>
                        <th>Fill Out</th>
                        <th>Edit Template</th>
                        <th>Delete Template</th>
                      </tr>
                    </thead>
                    {this.state.templates.map((template) => {
                      if(template.form_category_id === category.id)
                      return (
                        <tbody key={template.id}>
                          <tr>
                            <td>{template.type}</td>
                            <td><button>Fill Out</button></td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                          </tr>
                        </tbody>
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