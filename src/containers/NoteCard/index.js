import React from 'react';

import './NoteCard.css';

export const NoteCard = ({ text, tag, date, id }) => {
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
      <p>{date}</p>
    </div>
  ) 
}

export default NoteCard;