import React from 'react';
import { isValidUrl } from '../helpers';

const MenuItem = ({ text, url }) => {
  const itemId = `menu-item_${isValidUrl(url) ? 'external' : ''}`;

  return (
    <li>
      {isValidUrl(url) ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </li>
  );
};

export default MenuItem;
