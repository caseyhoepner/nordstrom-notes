import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NoteForm from '../../containers/NoteForm';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Route exact path='/' component={NoteForm} />
        </div>
    );
  }
}

export default App;
