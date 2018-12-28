import React, { Component } from 'react';
import { postNote } from '../../utils/api';
import './NoteForm.css';

export class NoteForm extends Component {
  constructor() {
    super()

    this.state = {
      text: '',
      tag: '',
      time: '',
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value }) 
  }

  handleClick = async (event) => {
    const moment = require('moment');

    event.preventDefault();
    await this.setState({ time: moment() })
    await postNote(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='nf-container'>
        <h1 className='nf-title'>New Note</h1>
        <p className='nf-max'>(max 250 characters)</p>
        <form className='nf-form'>
          <textarea 
            className='nf-text-area'
            name='text' 
            type='text' 
            value={this.state.text} 
            onChange={this.handleChange} 
            maxLength='250' />
          <select
              className='nf-select'
              name='tag' 
              value={this.state.tag} 
              onChange={this.handleChange}>
            <option value=''>Choose a Tag</option>
            <option value='personal'>Personal</option>
            <option value='work'>Work</option>
            <option value='hobby'>Hobby</option>
          </select>
          <button className='nf-save-btn' onClick={this.handleClick}>Save Note</button>
        </form>
      </div>
    ) 
  }
}

export default NoteForm;