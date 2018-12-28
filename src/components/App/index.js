import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import NoteForm from '../../components/NoteForm';
import NoteList from '../../containers/NoteList';
import PathError from '../PathError';
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
};

export default withRouter(App);