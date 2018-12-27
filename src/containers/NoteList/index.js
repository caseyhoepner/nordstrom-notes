import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NoteList.css';
import { changeFilter } from '../../actions/filter-actions';

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
    changeFilter(filter);
  }

  render() {
    const { notes } = this.props; 
    const { tag } = this.state; 
    let noteCards;

    if (notes) {
      noteCards = notes.map(note => <p>{note.text}</p>)
    } else {
      noteCards = <p>'There are no notes to display'</p>
    }

    return (
      <div>
        <h1>Notes</h1>
          <select
              name='filter' 
              value={tag} 
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

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (filter) => dispatch(changeFilter(filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);