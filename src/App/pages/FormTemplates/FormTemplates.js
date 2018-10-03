import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { orange300 } from 'material-ui/styles/colors';
import JobsStyles from '../Jobs/JobsStyes.css'
import Footer from '../Footer/Footer'

import LoadingProgress from '../../components/Progress'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


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
      snackOpen: false,
      confirmationTemplateId: null,
    }
    this.handleFillOutClick = this.handleFillOutClick.bind(this);
  }

  handleClick = () => {
    if (this.props.formSubmitted)
      this.setState({ snackOpen: true });
  };

  handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ snackOpen: false });
    this.props.setFormSubmittedToFalse();
  };


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
    this.handleClick();
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
    console.log(this.props.formSubmitted);
    if (this.state.data.length > 0) {
      return <Redirect to={`/form_templates/${this.state.confirmationTemplateId}`} />
    }
      return(
        <div>
          <Header />
          <br/>
          <Typography variant="display3" gutterBottom align="center">
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
                        <TableHeaderColumn style={{fontSize:30}}>Form name</TableHeaderColumn>
                        <TableHeaderColumn style={{fontSize:30}}>Fill Out</TableHeaderColumn>
                        <TableHeaderColumn style={{fontSize:30}}>Delete Template</TableHeaderColumn>
                      </TableHeader>
                      <TableBody displayRowCheckbox={false}>
                        {this.state.templates.reverse().map((template) => {
                          if(template.form_category_id === category.id)
                          return (
                            <TableRow  key={template.id}>
                              <TableRowColumn style={{fontSize:17}}>{template.type}</TableRowColumn>
                              <TableRowColumn style={{fontSize:17}}><FlatButton backgroundColor={orange300} onClick={() => this.handleFillOutClick(template.id)}>Fill Out</FlatButton></TableRowColumn>
                              <TableRowColumn style={{fontSize:17}}><FlatButton backgroundColor="lightgrey" onClick={() => this.handleClickConfirmation(template.id)}>Delete</FlatButton></TableRowColumn>
                            </TableRow>
                          )
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              )
            })}
            <br/>
            <br/>
            <Footer />
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

          <div>
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={this.state.snackOpen}
              autoHideDuration={6000}
              onClose={this.handleClose}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id="message-id">Form successfully submitted!</span>}
              action={[
                <IconButton
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  onClick={this.handleSnackClose}
                >
                  <CloseIcon style={{color: "orange"}} />
                </IconButton>,
              ]}
            />

          </div>


        </div>
      )
  }
}



export default FormTemplate;