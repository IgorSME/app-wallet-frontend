import React from 'react';

import sprite from 'images/svg-sprite.svg';

export function SvgIcon({ nameIcon }) {
  return (
    <svg>
      <use href={`${sprite}#${nameIcon}`}></use>
    </svg>
  );
}
