import React, { Component } from 'react'

class Suggestions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const options = this.props.results.map(item => (
      <table key={item.id}>
        <thead>
          <th>ID</th>
          <th>Date</th>
          <th>User</th>
          <th>Form Name</th>
        </thead>
        <tbody>
        <td>{item.form_template_id}</td> 
        <td>{item.date_updated}</td>
        </tbody>
      </table>
    ))

    return <ul>{options}</ul>    
  }
}

// const Suggestions = (props) => {
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

export default Suggestions