import React, { Component } from 'react';
import NoteForm from '../../containers/NoteForm';
import NoteList from '../../containers/NoteList';
import { BrowserRouter, Route, withRouter, Switch } from 'react-router-dom';
import { retrieveNotes } from '../../thunks/fetchNotes';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.retrieveNotes();
  }

  render() {
    return (
        <div className="App">
          <Route exact path='/' component={NoteForm} />
          <Route exact path='/notes' component={NoteList} />
        </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  retrieveNotes: () => dispatch(retrieveNotes())
})

export default withRouter(connect(null, mapDispatchToProps)(App));