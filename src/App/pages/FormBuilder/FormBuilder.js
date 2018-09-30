import React, { Component } from 'react'
import formBuilderObject from '../../CreateFormBuilder.js'
import axios from 'axios';
import { Redirect } from 'react-router-dom'

class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.fbRef = React.createRef();
    this.state = {
      formContent: {},
      categories: [],
      newTemplateName: "",
      newTemplateCategory: "",
      redirect: false,
    };

    this.saveForm = this.saveForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    this.setState({newTemplateName: event.target[0].value, newTemplateCategory: event.target[1].value});
  
  }

  componentWillMount() {
    
    axios.get('/api/getFormtemplateCategories')
    .then(response => {
      
      response.data.forEach(category => {
        this.setState(prevState => ({
          categories: [...prevState.categories, category.name]
        }))
      })
    })
  }
  
  componentDidUpdate () {
    if(this.state.newTemplateName && !this.state.redirect){
      formBuilderObject.createFormBuilder(this.fbRef.current);
    }
  }
  
  saveForm() {
    if (!Object.keys(formBuilderObject.getListOfDisplayOptions()).length) {
      return;
    }
    console.log(formBuilderObject.getListOfDisplayOptions());
    this.setState({
      formContent: formBuilderObject.getListOfDisplayOptions()
      },
      () => {
        const formContent = this.state.formContent;
        // console.log("this.state.formContent:", this.state.formContent);
        axios.post('/api/postFormTemplate', {
          name: this.state.newTemplateName,
          category: this.state.newTemplateCategory,  
          formContent
        })
        .then(() => {
          this.setState({ newTemplateName: "", redirect: true});
        }) 
      }
      );
    }
    
    render() {
    if (this.state.redirect) {

      return <Redirect to='/form_templates'/>
    } else if(this.state.newTemplateName) {
      return (
        <div>
          <h2>{this.state.newTemplateName}</h2>
          <div ref={this.fbRef}/>
          <button onClick={this.saveForm} id="saveButton">Save</button>
        </div>
        )
    } else {
      return (
        <div>
          <h2>Build a Form:</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" required/>
            <label>Category</label>
            <select name="category">{this.state.categories.map(category => <option key={category}>{category}</option>)}</select>
            <input type="Submit"/>
          </form>
        </div>
      )
    }
  }
}

export default FormBuilder;
