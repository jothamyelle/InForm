import React, { Component } from 'react'
import createFormBuilder from '../../CreateFormBuilder.js'

class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.fbRef = React.createRef();
  }



  componentDidMount () {
    createFormBuilder(this.fbRef.current);

  }

  componentWillUnmount () {
    // removeFormBuilder(this.fbRef.current);
  }

  render() {
    return (
    
      <div ref={this.fbRef}/>
      )
  }
}

export default FormBuilder;
