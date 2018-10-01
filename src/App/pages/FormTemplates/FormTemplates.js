import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TemporaryDrawer from '../Drawer';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { orange300 } from 'material-ui/styles/colors';
import JobsStyles from '../Jobs/JobsStyes.css'

import LoadingProgress from '../../components/Progress'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
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
      data: [],
      open: false,
      confirmationTemplateId: null,
    }
    this.handleFillOutClick = this.handleFillOutClick.bind(this);
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

  handleFillOutClick = (id) => {
    axios.get(`/api/getFormtemplate/${id}`)
    .then(response => {
      this.setState({
        data: response.data,
        confirmationTemplateId: id
      }, () => {
        this.props.getFormData(this.state.data, id)
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
    if (this.state.data.length > 0) {
      return <Redirect to={`/form_templates/${this.state.confirmationTemplateId}`} />
    }
      return(
        <div>
          <TemporaryDrawer />  
          <Typography variant="display4" gutterBottom align="center">
            Form Templates
          </Typography>
          <div className={JobsStyles.searchBox}>
            <Link to={'./form_builder'}>
              <FlatButton backgroundColor={orange300}><span className={JobsStyles.span}>Create New Form Template</span></FlatButton>
            </Link>
            <br/>
            <br/>
          </div>

          {this.state.isLoading ? (<LoadingProgress/>) : (
          <div>
            {this.state.categories.map((category) => {
              return(  
                <div key={category.id} className={JobsStyles.tableContainer}>
                  <Typography variant="display2" gutterBottom align="center">
                    {category.name}
                  </Typography>
                  <div className="form-container">
                    <Table selectable={false} className={JobsStyles.formsTable}>
                      <TableHeader displaySelectAll={false}>
                        <TableRow displayRowCheckbox={false}>
                          <TableHeaderColumn>Form name</TableHeaderColumn>
                          <TableHeaderColumn>Fill Out</TableHeaderColumn>
                          <TableHeaderColumn>Delete Template</TableHeaderColumn>
                        </TableRow>
                      </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                        {this.state.templates.map((template) => {
                          if(template.form_category_id === category.id)
                          return (
                            <TableRow  key={template.id}>
                              <TableRowColumn>{template.type}</TableRowColumn>
                              <TableRowColumn><FlatButton backgroundColor={orange300}>Fill Out</FlatButton></TableRowColumn>
                              <TableRowColumn><FlatButton backgroundColor="lightgrey" onClick={() => this.handleClickConfirmation(template.id)}>Delete</FlatButton></TableRowColumn>
                            </TableRow>
                          )
                        })}
                      </TableBody>
                    </Table>
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