import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NoteForm from '../../containers/NoteForm';
import NoteList from '../../containers/NoteList';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Route exact path='/' component={NoteForm} />
          <Route exact path='/notes' component={NoteList} />
        </div>
    );
  }
}

export default App;
