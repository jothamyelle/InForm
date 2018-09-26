import React, { Component } from 'react'

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const options = this.props.results.map(item => (
        <tbody key={item.id}>
          <tr>
            <td>{item.date_updated}</td>
            <td>{item.first_name} {item.last_name}</td>
            <td>{item.type}</td>
            <td>{item.job_name}</td>
          </tr>
        </tbody>
    ))

    return (
      <div>
        <h2>Search Results:</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>User</th>
              <th>Form Name</th>
              <th>Job Name</th>
            </tr>
          </thead>
          {options}
          </table>
        </div>          
      )
  }
}

// const SearchResults = (props) => {
//   const options = props.results.map(item => (
//     <table key={item.id}>
//       <thead>
//         <th>ID</th>
//         <th>Date</th>
//         <th>User</th>
//         <th>Form Name</th>
//       </thead>
//       <tbody>
//       <td>{item.form_template_id}</td> 
//       <td>{item.date_updated}</td>
//       </tbody>
//     </table>
//   ))
//   return <ul>{options}</ul>
// }

export default SearchResults