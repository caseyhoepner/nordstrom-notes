import React, { Component } from 'react';
import { postNote } from '../../utils/api';
import './NoteForm.css';

export class NoteForm extends Component {
  constructor() {
    super()

    this.state = {
      text: '',
      tag: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value }) 
  }

  handleClick = async (event) => {
    event.preventDefault();
    await postNote(this.state)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>Notes</h1>
        <form>
          <textarea 
            name='text' 
            type='text' 
            value={this.state.text} 
            onChange={this.handleChange} 
            maxLength='250' />
          <select
              name='tag' 
              value={this.state.tag} 
              onChange={this.handleChange}>
            <option value=''>Choose a Tag</option>
            <option value='personal'>Personal</option>
            <option value='work'>Work</option>
            <option value='hobby'>Hobby</option>
          </select>
          <button onClick={this.handleClick}>Save Note</button>
        </form>
      </div>
    ) 
  }
}

export default NoteForm;