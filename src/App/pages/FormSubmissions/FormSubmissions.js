import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../components/Search';
import TemporaryDrawer from '../Drawer';
import FormSubmissionsTable from '../../components/FormSubmissionsTable'
import Typography from '@material-ui/core/Typography';
import LoadingProgress from '../../components/Progress';


class FormSubmissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      thisWeeksForms: null,
      error: null,
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getFormSubmissions();
  }

  
  getFormSubmissions = () => {

    const date = new Date();
    date.setDate(date.getDate() - 7);
    const date1 = date.toISOString().slice(0, 10);

    const today = new Date();
    today.setDate(today.getDate() + 2);
    const date2 = today.toISOString().slice(0, 10);

    // const date2 = oneWeekAgo.getDate().toISOString().slice(0, 10);
    Promise.all([
      fetch('/api/getFormSubmissions'),
      // insert this as param into getformsubmissionsbydate - new Date().toISOString().slice(0, 10)
      fetch(`/api/getFormSubmissionsFromLastWeek/${date1}/${date2}`)
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([forms, thisWeeksForms]) => {
      this.setState({
        isLoading: false,
        list: forms,
        thisWeeksForms: thisWeeksForms
      })
      },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render() {
    const today = new Date();
    const dateArray =[];

    for (let i = 0; i < 7; i++){
      let tempDate = new Date();
      tempDate.setDate(tempDate.getDate()-i);
      dateArray.push(tempDate);  
    }
    return (
      <div>
        <TemporaryDrawer />

        <Typography variant="display3" gutterBottom align="center">
            Form Submissions 
        </Typography>

        <Search data={this.state.list}/>
        <Typography variant="display2" gutterBottom align="center">
            Submissions this week
        </Typography>
        <div>
        {this.state.isLoading ? (
          <LoadingProgress/>
        ) : (
          <FormSubmissionsTable dateArray={dateArray} thisWeeksForms={this.state.thisWeeksForms}/>
          )}
        </div>
      </div>
    )
  }
}

export default FormSubmissions;