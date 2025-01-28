import React from 'react';
import { Link } from 'react-router-dom';

function PersonLink({ person, children, color = 'white' }) {
  const text = children || `by ${person.username}`;
  return (
    <Link
      className={`text-${color} float-end`}
      to={`profile/${person.username}`}
    >
      {text}
    </Link>
  );
}

export default PersonLink;
