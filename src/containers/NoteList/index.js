import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NoteList.css';
// import { addNote } from '../../actions/note-actions';

export class NoteList extends Component {
  constructor() {
    super()

    this.state = {
      filter: ''
    }
  }

  handleChange = async (event) => {
    const { name, value } = event.target;

    await this.setState({ [name]: value }) 
    this.props.changeFilter(this.state);
  }

  render() {
    return (
      <div>
        <h1>Notes</h1>
          <select
              name='tag' 
              value={this.state.tag} 
              onChange={this.handleChange}>
            <option value=''>Choose a Filter</option>
            <option value='personal'>Personal</option>
            <option value='work'>Work</option>
            <option value='hobby'>Hobby</option>
          </select>
      </div>
    ) 
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (newFilter) => dispatch(changeFilter(newFilter)),
})

export default connect(null, mapDispatchToProps)(NoteList);