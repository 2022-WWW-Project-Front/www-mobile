import React from 'react';

const MenuIcon = ({ color = '#fff' }) => {
  return (
    <div>
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="8" height="8" fill={color} />
        <rect x="18" y="5" width="8" height="8" fill={color} />
        <rect x="31" y="5" width="8" height="8" fill={color} />
        <rect x="5" y="18" width="8" height="8" fill={color} />
        <rect x="18" y="18" width="8" height="8" fill={color} />
        <rect x="31" y="18" width="8" height="8" fill={color} />
        <rect x="5" y="31" width="8" height="8" fill={color} />
        <rect x="18" y="31" width="8" height="8" fill={color} />
        <rect x="31" y="31" width="8" height="8" fill={color} />
      </svg>
    </div>
  );
};

export default MenuIcon;
