import React from 'react';
import { Link } from 'react-router-dom';

import './PathError.css';

const PathError = () => {
  return (
    <div>
      <h1>This page does not exist.</h1>
      <Link 
          className='pe-back-btn' 
          to="/">
          &#8592; Reroute to homepage
        </Link>
    </div>
  )
}

export default PathError;