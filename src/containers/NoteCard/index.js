import React from 'react';

import './NoteCard.css';

export const NoteCard = ({ text, tag, time, id }) => {
  const getTime = () => {
    let timeDisplayed;
    const moment = require('moment');
    let expiration = time
    const now = moment();
    const exp = moment(expiration);
    const days = exp.diff(now, 'days');
    const hours = exp.subtract(days, 'days').diff(now, 'hours');
    const minutes = exp.subtract(hours, 'hours').diff(now, 'minutes');
    const seconds = exp.subtract(minutes, 'minutes').diff(now, 'seconds');

    if (days) {
      timeDisplayed = `${days * -1} days ago`
    } else if (hours) {
      timeDisplayed = `${hours * -1} hours ago`
    } else if (minutes) {
      if (minutes === -1) {
        timeDisplayed = `${minutes * -1} minute ago`
      } else {
        timeDisplayed = `${minutes * -1} minutes ago`
      }
    } else if (seconds) {
      timeDisplayed = `${seconds * -1} seconds ago`
    }
    return timeDisplayed;
  }


  return (
    <div className='nc-notecard'>
      <div className='nc-icon-text-container'>
        <img 
          className='nc-icon' 
          src={require(`../../assets/${tag}.svg`)}
          alt={`Icon denoting that this note has a tag of ${tag}.`}
        />
        <p className='nc-text'>{text}</p>
      </div>
      <p>{getTime()}</p>
    </div>
  ) 
}

export default NoteCard;