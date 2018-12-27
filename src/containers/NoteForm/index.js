import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NoteForm.css';

export class NoteForm extends Component {
  constructor() {
    super()

    this.state = {
      text: '',
      tag: ''
    }
  }

  render() {
    return (
      <div>
        <p>NoteForm</p>
      </div>
      ) 
  }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(null, mapDispatchToProps)(NoteForm);