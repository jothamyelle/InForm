import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TemporaryDrawer from '../Drawer';
import axios from 'axios';
import LoadingProgress from '../../components/Progress'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import FlatButton from 'material-ui/FlatButton';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FormTemplate extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      categories: null,
      templates: null,
      open: false,
      confirmationTemplateId: null,
    }
  }

  handleClickConfirmation = (templateId) => {
    this.setState({ confirmationTemplateId: templateId, open: true });
  };

  handleConfirmationDelete = (confirmation) => {
    if (confirmation === 'delete') {
      this.deleteTemplate(this.state.confirmationTemplateId);    
    }
    this.setState({ confirmationTemplateId: null, open: false });
  };

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

  deleteTemplate = (templateId) => {
    axios.post('/api/deleteFormTemplate', {
      id: templateId
    })
    .then(() => {
      console.log("I'm back")
      this.getTemplatesAndCategories();
    }) 
  }

  render() {
      return(
        <div>
          <TemporaryDrawer />     
          <h1> Form Templates </h1>
          <Link to={'./form_builder'}>
            <button variant="raised">
              Create New Form Template
            </button>
          </Link>
          {this.state.isLoading ? (<LoadingProgress/>) : (
            <div>
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
                              <td><button onClick={() => this.handleClickConfirmation(template.id)}>Delete</button></td>
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
          )}

          <div>
            <Dialog
              open={this.state.open}
              TransitionComponent={Transition}
              keepMounted
              onClose={this.handleConfirmationDelete}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                {"InForm"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Deleting this template means that all submitted forms using this template will also be deleted. Do you want to proceed?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <FlatButton onClick={() => this.handleConfirmationDelete('cancel')} color="primary">
                  Cancel
                </FlatButton>
                <FlatButton backgroundColor="orange" onClick={() => this.handleConfirmationDelete('delete')} color="primary">
                  Delete
                </FlatButton>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      )
  }
}

export default FormTemplate;