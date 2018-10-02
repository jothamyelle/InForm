import React, { Component } from 'react'
import formBuilderObject from '../../CreateFormBuilder.js'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import orange from '@material-ui/core/colors/orange';
import FormCategoryNameInput from '../../components/FormCategoryNameInput'
import FormCategorySelect from '../../components/FormCategorySelect'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


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
      submitted: false
    };

    this.saveForm = this.saveForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();  
    this.setState({submitted: true});
    // this.setState({newTemplateName: event.target[0].value, newTemplateCategory: event.target[1].value});
  }

  handleFormChange = (value) => {
    this.setState({ newTemplateCategory: value})
  }

  handleFormNameChange = (value) => {
    this.setState({ newTemplateName: value})
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

  componentDidMount() {
    // This adds style links to the head in order to style the form builder
    let miuScript = document.createElement('script')
    miuScript.setAttribute("src", "//cdn.muicss.com/mui-0.9.41/js/mui.min.js");
    miuScript.setAttribute("id", "materialuiscript");
    document.head.appendChild(miuScript);

    let MUIStyle1 = document.createElement('link')
    MUIStyle1.setAttribute("href", "//cdn.muicss.com/mui-0.9.41/css/mui.min.css");
    MUIStyle1.setAttribute("id", "MUIStyle1");
    MUIStyle1.setAttribute("type", "text/css");
    MUIStyle1.setAttribute("rel", "stylesheet");
    document.head.appendChild(MUIStyle1);

    let MUIStyle2 = document.createElement('link')
    MUIStyle2.setAttribute("href", "test.css");
    MUIStyle2.setAttribute("id", "MUIStyle2");
    MUIStyle2.setAttribute("type", "text/css");
    MUIStyle2.setAttribute("rel", "stylesheet");
    document.head.appendChild(MUIStyle2);

    let robotoFont = document.createElement('link')
    robotoFont.setAttribute("href", "https://fonts.googleapis.com/css?family=Roboto");
    robotoFont.setAttribute("id", "robotoFont");
    robotoFont.setAttribute("rel", "stylesheet");
    document.head.appendChild(robotoFont);

  }

  componentWillUnmount() {
    // Removing the style links when leaving form builder
    let script = document.getElementById('materialuiscript')
    let MUIStyle1 = document.getElementById('MUIStyle1')
    let MUIStyle2 = document.getElementById('MUIStyle2')
    let robotoFont = document.getElementById('robotoFont')    

    document.head.removeChild(script)
    document.head.removeChild(MUIStyle1)
    document.head.removeChild(MUIStyle2)
    document.head.removeChild(robotoFont)
  }
  
  componentDidUpdate () {
    if(this.state.submitted && !this.state.redirect){      
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
          document.getElementsByClassName('materialcssaddition').innerHTML = '';
          formBuilderObject.emptyListOfDisplayOptions();
          this.setState({ newTemplateName: "", newTemplateCategory: "", submitted: false, formContent: "", redirect: true});
        }) 
      }
      );
    }
    
    render() {
      const formOptions = this.state.categories.map(category => (
        <MenuItem value={category}>{category}</MenuItem>
      ))

    if (this.state.redirect) {

      return <Redirect to='/form_templates'/>
    } else if(this.state.submitted) {
      return (
        <div>
          <Typography variant="display3" align="Center">
            Form Builder
          </Typography>
          <Typography variant="display2" gutterBottom align="Left">
            {this.state.newTemplateName}
          </Typography>
          <div ref={this.fbRef}/>
          <Button onClick={this.saveForm} id="saveButton">Save</Button>
        </div>
        )
    } else {
      return (
        <div>
          <Typography variant="display2" align="Center">
            Build a Form:
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <FormCategoryNameInput handleFormNameChange={this.handleFormNameChange}/>
            <FormCategorySelect handleFormChange={this.handleFormChange} formCategories={this.state.categories}/>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      )
    }
  }
}

export default FormBuilder;
