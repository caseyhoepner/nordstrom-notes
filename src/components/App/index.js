import React, { Component } from 'react';
import NoteForm from '../../containers/NoteForm';
import NoteList from '../../containers/NoteList';
import PathError from '../PathError';
import { Route, withRouter, Switch } from 'react-router-dom';
import { retrieveNotes } from '../../thunks/fetchNotes';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    this.props.retrieveNotes();
  }

  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path='/' component={NoteForm} />
            <Route exact path='/notes' component={NoteList} />
            <Route component={ PathError } />
          </Switch>
        </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  retrieveNotes: () => dispatch(retrieveNotes())
})

export default withRouter(connect(null, mapDispatchToProps)(App));