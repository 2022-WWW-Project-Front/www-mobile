import React from 'react';
import { InfoCategoryLayout } from '../../layout/info/InfoCategoryLayout';

const InfoCategory = () => {
  const categoryList = [
    { category: 'WWW', url: 'exhibition' },
    { category: 'HOW', url: 'how' },
    { category: 'CREDIT', url: 'credit' },
    { category: 'FONT', url: 'font' }
  ];

  return (
    <div>
      <InfoCategoryLayout list={categoryList} />
    </div>
  );
};

export default InfoCategory;
