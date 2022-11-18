import React, { useState } from 'react';
import { InfoCategoryLayout } from '../../layout/info/InfoCategoryLayout';

const InfoCategory = () => {
  const categoryList = [
    { category: 'WWW', url: '' },
    { category: 'HOW', url: '/how' },
    { category: 'CREDIT', url: '/credit' },
    { category: 'FONT', url: '/font' }
  ];

  const [active, setActive] = useState('WWW');

  return (
    <div>
      <InfoCategoryLayout list={categoryList} active={active} setActive={setActive} />
    </div>
  );
};

export default InfoCategory;
