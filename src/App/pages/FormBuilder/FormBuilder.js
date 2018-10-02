import React, { Component } from 'react'
import formBuilderObject from '../../CreateFormBuilder.js'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


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
      document.getElementsByTagName('head')[0].innerHTML +=
      `
      <link class="materialcssaddition" href="//cdn.muicss.com/mui-0.9.41/css/mui.min.css" rel="stylesheet" type="text/css" />
      <link class="materialcssaddition" href="test.css" rel="stylesheet" type="text/css" />
      <link class="materialcssaddition" href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      <script class="materialcssaddition" src="//cdn.muicss.com/mui-0.9.41/js/mui.min.js"></script>
      `
      
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
          formBuilderObject.emptyListOfDisplayOptions();
          document.getElementsByClassName('materialcssaddition').innerHTML = '';
          this.setState({ newTemplateName: "", newTemplateCategory: "", formContent: "", redirect: true});
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
          <Typography variant="display3" gutterBottom align="Center">
            Form Builder
          </Typography>
          <Typography variant="display2" gutterBottom align="Left">
            {this.state.newTemplateName}
          </Typography>
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
