import React from 'react';

const Logo = ({ side = '#121820', center = '#1635F4' }) => {
  return (
    <div>
      <svg width="95" height="44" viewBox="0 0 95 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M65.3726 36.5979V29.6873H52.6687V36.5979H65.3726Z" fill={side} />
        <path d="M6.93969 7H0V36.5974H6.93969V7Z" fill={side} />
        <path d="M19.9151 7H12.9754V30.314H19.9151V7Z" fill={side} />
        <path d="M32.8979 7H25.9582V36.5974H32.8979V7Z" fill={center} />
        <path d="M13.2635 36.5979V29.6873H0.559567V36.5979H13.2635Z" fill={side} />
        <path d="M32.4042 36.5979V29.6873H19.7003V36.5979H32.4042Z" fill={side} />
        <path d="M45.9726 7H39.0329V30.314H45.9726V7Z" fill={center} />
        <path d="M58.949 7H52.0093V36.5974H58.949V7Z" fill={center} />
        <path d="M39.321 36.5979V29.6873H26.0559V36.5979H39.321Z" fill={center} />
        <path d="M58.4587 36.5979V29.6873H45.7549V36.5979H58.4587Z" fill={center} />
        <path d="M72.0247 7H65.085V30.314H72.0247V7Z" fill={side} />
        <path d="M85.0001 7H78.0604V36.5974H85.0001V7Z" fill={side} />
        <path d="M84.5153 36.5981V29.6874H71.8114V36.5981H84.5153Z" fill={side} />
      </svg>
    </div>
  );
};

export default Logo;
