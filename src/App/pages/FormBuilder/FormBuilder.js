import React, { Component } from 'react'
import createFormBuilder from '../../CreateFormBuilder.js'

class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.fbRef = React.createRef();
  }



  componentDidMount () {

    // console.log(createFormBuilder.listOfDisplayOptions);
    const fb = createFormBuilder(this.fbRef.current);
    console.log("fb = ", fb);
  }

  componentWillUnmount () {
    // removeFormBuilder(this.fbRef.current);
  }

  render() {
    return (
      <div>
        <div ref={this.fbRef}/>
        <button onClick={createFormBuilder}>Save!</button>
      </div>
      )
  }
}

export default FormBuilder;
