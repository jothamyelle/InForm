import React, { Component } from 'react'
import formBuilderObject from '../../CreateFormBuilder.js'

class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.fbRef = React.createRef();
    this.state = {
      formContent: {}
    };

    this.saveForm = this.saveForm.bind(this);
  }

  componentDidMount () {
    formBuilderObject.createFormBuilder(this.fbRef.current);
  }

  saveForm() {
    this.setState({
      formContent: formBuilderObject.getListOfDisplayOptions()
      },
      () => console.log("this.state.formContent:", this.state.formContent)
    );
  }

  render() {
    return (
      <div>
        <div ref={this.fbRef}/>
        <button onClick={this.saveForm} id="saveButton">Save</button>
      </div>
      )
  }
}

export default FormBuilder;
