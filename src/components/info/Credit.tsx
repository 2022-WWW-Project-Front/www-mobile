import React from 'react';
import CreditLayout from '../../layout/info/CreditLayout';

const Credit = () => {
  const DirectorList = [
    {
      part: 'Project manager',
      list: [
        { role: 'var(--assist)', name: 'Artist All' },
        { role: 'var(--lead)', name: 'DISP' },
        { role: 'var(--serve)', name: 'Management All' }
      ]
    },
    {
      part: '3D Graphic Design',
      list: [
        { role: 'var(--lead)', name: 'Mery' },
        { role: 'var(--serve)', name: 'kwonasart' }
      ]
    },
    {
      part: '2D Graphic Design',
      list: [
        { role: 'var(--lead)', name: 'Si yeon' },
        { role: 'var(--serve)', name: 'yu jin' }
      ]
    },
    {
      part: 'Motion Design',
      list: [
        { role: 'var(--lead)', name: 'YANZI' },
        { role: 'var(--serve)', name: 'Mery' }
      ]
    },
    {
      part: 'Editorial Design',
      list: [
        { role: 'var(--lead)', name: 'yu jin' },
        { role: 'var(--serve)', name: 'Si yeon' }
      ]
    },
    {
      part: 'VMD',
      list: [
        { role: 'var(--lead)', name: 'Nam Yeonwoo' },
        { role: 'var(--assist)', name: 'Management All' }
      ]
    },
    { part: 'MD', list: [{ role: 'var(--lead)', name: 'DISP' }] },
    {
      part: 'UIUX',
      list: [
        { role: 'var(--lead)', mw: 'Mobile', name: 'Kwonasart' },
        { role: 'var(--lead)', mw: 'Web', name: 'DISP' }
      ]
    },
    {
      part: 'Frontend',
      list: [
        { role: 'var(--lead)', name: 'Ryn' },
        { role: 'var(--serve)', name: 'Seunghun Byeon' },
        { role: 'var(--serve)', name: 'JayO' }
      ]
    },
    {
      part: 'Backend',
      list: [
        { role: 'var(--lead)', name: 'Jaecheol Jeong' },
        { role: 'var(--serve)', name: 'ash' }
      ]
    },
    { part: 'Staff', list: [{ role: 'var(--lead)', name: 'All' }] },
    { part: '', list: [{ role: '', name: '' }] }
  ];
  return <CreditLayout DirectorList={DirectorList} />;
};

export default Credit;
