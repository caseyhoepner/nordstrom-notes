import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NoteCard } from '../NoteCard';

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

    await this.setState({ [name]: value }) 
  }

  filterNotes = (filter) => {
    const { notes } = this.props;

    return notes.filter(note => note.filter === filter)
  } 

  render() {
    const { notes } = this.props; 
    const { filter } = this.state; 
    let noteCards;

    if (filter && notes) {
      let filteredNotes = this.filterNotes(filter);

      if (filteredNotes.length !== 0) {
        console.log(filteredNotes)
        noteCards = filteredNotes.map(filteredNote => {
          return (
            <NoteCard 
              text={filteredNote.text} 
              date={filteredNote.date} 
              id={filteredNote.id}>
            </NoteCard>
          )
        })
      } else {
        noteCards = <p>There are no notes to display</p>
      }

    } else if (!filter && notes) {
      noteCards = notes.map(note => {
        return(
          <NoteCard 
            text={note.text} 
            date={note.date} 
            id={note.id}>
          </NoteCard>
        )
      })

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