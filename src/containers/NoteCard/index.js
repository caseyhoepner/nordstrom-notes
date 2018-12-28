import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveNote } from '../../actions/note-actions';
import './NoteCard.css';

export class NoteCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }
  }

  handleClick = () => {
    this.setState({ active: !this.state.active });
    this.props.setActive(this.props);
  }

  getTime = () => {
    const { text, tag, time, id } = this.props;
    let timeDisplayed;
    const moment = require('moment');
    const expiration = time;
    const now = moment();
    const exp = moment(expiration);
    const days = exp.diff(now, 'days');
    const hours = exp.subtract(days, 'days').diff(now, 'hours');
    const minutes = exp.subtract(hours, 'hours').diff(now, 'minutes');
    const seconds = exp.subtract(minutes, 'minutes').diff(now, 'seconds');
    if (days) {
      if (days === -1) {
        timeDisplayed = `${days * -1} day ago`
      } else {
        timeDisplayed = `${days * -1} days ago`
      }

    } else if (hours) {
      if (hours === -1) {
        timeDisplayed = `${hours * -1} hour ago`
      } else {
        timeDisplayed = `${hours * -1} hours ago`
      }

    } else if (minutes) {
      if (minutes === -1) {
        timeDisplayed = `${minutes * -1} minute ago`
      } else {
        timeDisplayed = `${minutes * -1} minutes ago`
      }

    } else if (seconds) {
      if (seconds === -1) {
        timeDisplayed = `${seconds * -1} second ago`
      } else {
        timeDisplayed = `${seconds * -1} seconds ago`
      }
    }
    return timeDisplayed;
  }

  render() {
    const { text, tag, time, id, activeNote } = this.props;
    console.log(this.props)
    console.log(this.props)
    return (
      <div onClick={this.handleClick} className={ activeNote.id === id ? 'nc-active nc-notecard' : ' nc-notecard' }>
        <div className='nc-icon-text-container'>
          <img 
            className='nc-icon' 
            src={require(`../../assets/${tag}.svg`)}
            alt={`Icon denoting that this note has a tag of ${tag}.`}
          />
          <p className='nc-text'>{text}</p>
        </div>
        <p className='nc-time'>{this.getTime()}</p>
      </div>
    ) 
  }
}

export default connect(null, null)(NoteCard);