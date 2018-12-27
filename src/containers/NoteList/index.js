import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeFilter } from '../../actions/filter-actions';
import './NoteList.css';

export class NoteList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: ''
    }
  }

  handleChange = async (event) => {
    const { name, value } = event.target;
    const { filter } = this.state;
    const { changeFilter } = this.props; 

    await this.setState({ [name]: value }) 
  }

  filterNotes = (filter) => {
    const filteredNotes = this.props.notes.filter(note => {
      return note.filter === filter
    })
  } 

  render() {
    const { notes } = this.props; 
    const { filter } = this.state; 
    let noteCards;

    if (filter && notes) {
      let filteredNotes = this.filterNotes(filter);

      if (filteredNotes) {
        noteCards = filteredNotes.map(filteredNote => <p>{filteredNote.text}</p>)
      } else {
        noteCards = <p>There are no notes to display</p>
      }

    } else if (!filter && notes) {
      noteCards = notes.map(note => <p>{note.text}</p>)

    } else {
      noteCards = <p>There are no notes to display</p>
    }

    return (
      <div>
        <h1>Notes</h1>
          <select
              name='filter' 
              value={filter} 
              onChange={this.handleChange}>
            <option value=''>Choose a Filter</option>
            <option value='personal'>Personal</option>
            <option value='work'>Work</option>
            <option value='hobby'>Hobby</option>
          </select>

        { noteCards }

      </div>
    ) 
  }
}

const mapStateToProps = (state) => ({
  notes: state.notes,
})

export default connect(mapStateToProps)(NoteList);