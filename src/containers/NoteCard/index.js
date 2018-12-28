import React from 'react';

import './NoteCard.css';

export const NoteCard = ({ text, tag, date, id }) => {
  return (
    <div className='nc-notecard'>
      <p className='nc-text'>{text}</p>
      <p>{date}</p>
    </div>
  ) 
}

export default NoteCard;