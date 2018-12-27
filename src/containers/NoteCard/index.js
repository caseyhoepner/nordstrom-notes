import React from 'react';

import './NoteCard.css';

export const NoteCard = ({ text, tag, date, id }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{tag}</p>
      <p>{id}</p>
    </div>
  ) 
}

export default NoteCard;