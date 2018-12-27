import React from 'react';

import './NoteCard.css';

export const NoteCard = ({ text, date, id }) => {
  console.log(text)
  return (
    <div>
      <p>{text}</p>
      <p>{date}</p>
      <p>{id}</p>
    </div>
  ) 
}

export default NoteCard;