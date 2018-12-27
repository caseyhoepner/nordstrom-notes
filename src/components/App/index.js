import React, { Component } from 'react';
import NoteForm from '../../containers/NoteForm';
import NoteList from '../../containers/NoteList';
import PathError from '../PathError';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path='/note-form' component={NoteForm} />
            <Route exact path='/' component={NoteList} />
            <Route component={ PathError } />
          </Switch>
        </div>
    );
  }
}


export default withRouter(connect(null, null)(App));