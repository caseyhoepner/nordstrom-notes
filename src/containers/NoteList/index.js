import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NoteCard } from '../NoteCard';
import { retrieveNotes } from '../../thunks/fetchNotes';
import './NoteList.css';


export class NoteList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: '',
      sorted: true,
      active: {}
    }
  }


  componentDidMount = async () => {
    await this.props.retrieveNotes();
    await this.setState({
      active: this.setInitialActive()
    })
  }

  setInitialActive = () => {
    const sortedNotes = this.props.notes.sort((a,b) => b.time.localeCompare(a.time));
    console.log(sortedNotes)
    return sortedNotes[0];
  }

  handleChange = async (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  filterNotes = (filter) => {
    const { notes } = this.props;

    return notes.filter(note => note.tag === filter);
  }

  setActive= (note) => {
    console.log('fire')
    this.setState({
      active: note
    })
  }


  render() {
    const { notes } = this.props; 
    const { filter, sorted } = this.state; 
    let filteredNotes = this.filterNotes(filter)
    let sortedNotes;
    let filteredSortedNotes
    let noteCards;

    if (sorted) {
      sortedNotes = notes.sort((a,b) => b.time.localeCompare(a.time));
      filteredSortedNotes = filteredNotes.sort((a,b) => b.time.localeCompare(a.time));
    } else {
      sortedNotes = notes.sort((a,b) => a.time.localeCompare(b.time));
      filteredSortedNotes = filteredNotes.sort((a,b) => a.time.localeCompare(b.time));
    }

    if (filteredSortedNotes.length) {
        noteCards = filteredSortedNotes.map(filteredNote => {
          return (
            <NoteCard 
              text={filteredNote.text} 
              time={filteredNote.time}  
              tag={filteredNote.tag}  
              id={filteredNote.id}
              key={filteredNote.id} 
              setActive={this.setActive}
              activeNote={this.state.active}

            />
          )
        })
        
    } else if (!filteredSortedNotes.length && !this.state.filter) {
      noteCards = sortedNotes.map(note => {
        return(
          <NoteCard 
            text={note.text} 
            time={note.time} 
            tag={note.tag} 
            id={note.id}
            key={note.id}
            setActive={this.setActive}
            activeNote={this.state.active}

           />
        )
      })

    } else {
      noteCards = <p>There are no notes to display</p>
    }

    return (
      <div className='nl-container'>
        <div className='nl-left'>
          <h1 className='nl-title'>Notes</h1>
            <div className='nl-filters'>
              <select
                  className='nl-select'
                  name='filter' 
                  value={filter} 
                  onChange={this.handleChange}>
                <option value=''>Choose a Filter</option>
                <option value='personal'>Personal</option>
                <option value='work'>Work</option>
                <option value='hobby'>Hobby</option>
              </select>
              <img 
                onClick={ () => this.setState({ sorted: !this.state.sorted }) } 
                className='nl-arrows' 
                src={require('../../assets/arrows.svg')}
                alt='Click to reorder the notes by date added.'
                />
            </div>
          <div className='nl-note-cards-container'>
            { noteCards }
          </div>
        </div>
        <div className='nl-right'>
          <div className='nl-add-note-btn' onClick={() => this.props.history.push('/note-form')}>

            <img className='nl-plus' src={require('../../assets/plus.svg')} alt='Click to add a note'/>
            <button className='nl-button'>Add a Note</button>
            <p>{this.state.active.text}</p>
          </div>
        </div>
      </div>
    ) 
  }
};

export const mapStateToProps = (state) => ({
  notes: state.notes,
});

export const mapDispatchToProps = (dispatch) => ({
  retrieveNotes: () => dispatch(retrieveNotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);