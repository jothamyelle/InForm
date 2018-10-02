import React, { Component } from 'react';
import TemporaryDrawer from '../Drawer';
import LoadingProgress from '../../components/Progress'
import Footer from '../Footer/Footer'
import Typography from '@material-ui/core/Typography';
import ImageAvatars from '../../components/Avatar'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      user: null,
			roles: null,
			forms: null
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getUserAndRoleById(this.props.match.params.id);
  }

  getUserAndRoleById = (id) => {
    Promise.all([
      fetch(`/api/getUser/${id}`),
			fetch(`/api/getUserRoles`),
			fetch(`/api/getUserSubmittedFormsById/${id}`)
    ])
    .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
    .then(([user, roles, forms]) => {
      this.setState({
        user: user,
				roles: roles,
				forms: forms,
        isLoading: false
      })
    })
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingProgress />
    } else {
			const uniqueFormCategories = [...new Set(this.state.forms.map(form => form.name))]
      const { email, first_name, last_name, image_url, phone_number, address, role_id } = this.state.user[0]

      return (
        <div>
          <TemporaryDrawer />
          <div className="employeeContainer">
          <Typography style={{color:"orange"}} variant="display3" gutterBottom align="center">
            {first_name} {last_name}
          </Typography>
          <ImageAvatars image_url={image_url}/>
        </div>
        <div style={{width: '80%', margin: 'auto'}}>
          <Typography variant="display2" gutterBottom align="center">
            Contact Info
          </Typography>
          <Table>
					<TableHeader displaySelectAll={false}>
            <TableRow displayRowCheckbox={false}>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Phone</TableHeaderColumn>
              <TableHeaderColumn>Address</TableHeaderColumn>
              <TableHeaderColumn>Role</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
					<TableRow displayRowCheckbox={false}>
						<TableRowColumn>{email}</TableRowColumn>
						<TableRowColumn>{phone_number}</TableRowColumn>
						<TableRowColumn>{address}</TableRowColumn>
						<TableRowColumn>{(this.state.roles.find(id => role_id)).role}</TableRowColumn>
					</TableRow>
          </TableBody>
				</Table>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="formContainer">
          <Typography variant="display2" gutterBottom align="center">
            Submitted Forms ({this.state.forms.length})
          </Typography>
				{uniqueFormCategories.map((category) => {
					return (
						<div style={{width: '80%', margin: 'auto'}} key={category}>
              <Typography variant="display1" gutterBottom align="center">
                {category}
              </Typography>
								<Table>
									<TableHeader displaySelectAll={false}>
										<TableRow displayRowCheckbox={false}>
											<TableHeaderColumn>Form Type</TableHeaderColumn>
											<TableHeaderColumn>Date Submitted</TableHeaderColumn>
											<TableHeaderColumn>View</TableHeaderColumn>
										</TableRow>
									</TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    {this.state.forms.map((form) => {
                      if(form.name === category){
                        return (
                            <TableRow key={form.id} displayRowCheckbox={false}>
                              <TableRowColumn>{form.type}</TableRowColumn>
                              <TableRowColumn>{(form.date_created).slice(0, 10)}</TableRowColumn>
                              <TableRowColumn><FlatButton backgroundColor="orange">View</FlatButton></TableRowColumn>
                            </TableRow>
                        )
                      }
                    })}
                  </TableBody>
								</Table>
                <br/>
                <br/>
						</div>
					)
				})}
			  </div>
        <br/>
        <br/>
        <Footer />
    </div>
    )
  } 
  }
}

export default UserProfile