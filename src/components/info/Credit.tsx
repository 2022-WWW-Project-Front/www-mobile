import React, { useState } from 'react';
import CreditLayout from '../../layout/info/CreditLayout';

const Credit = () => {
  const DirectorList = [
    {
      part: 'Project manager',
      list: [
        { role: 'var(--assist)', name: 'Artist All', email: null },
        { role: 'var(--lead)', name: 'DISP', email: '', links: [{ instagram: '' }] },
        { role: 'var(--serve)', name: 'Management All', email: null }
      ]
    },
    {
      part: '3D Graphic Design',
      list: [
        { role: 'var(--lead)', name: 'Mery', email: '@', links: [{ instagram: '' }] },
        { role: 'var(--serve)', name: 'kwonasart', email: '@', links: [{ instagram: '' }] }
      ]
    },
    {
      part: '2D Graphic Design',
      list: [
        { role: 'var(--lead)', name: 'Si yeon', email: '@', links: [{ instagram: '' }] },
        { role: 'var(--serve)', name: 'yu jin', email: '@', links: [{ instagram: '' }] }
      ]
    },
    {
      part: 'Motion Design',
      list: [
        { role: 'var(--lead)', name: 'YANZI', email: '@', links: [{ instagram: '' }] },
        { role: 'var(--serve)', name: 'Mery', email: '@', links: [{ instagram: '' }] }
      ]
    },
    {
      part: 'Editorial Design',
      list: [
        { role: 'var(--lead)', name: 'yu jin', email: '@', links: [{ instagram: '' }] },
        { role: 'var(--serve)', name: 'Si yeon', email: '@', links: [{ instagram: '' }] }
      ]
    },
    {
      part: 'VMD',
      list: [
        { role: 'var(--lead)', name: 'Nam Yeonwoo', email: '@', links: [{ instagram: '' }] },
        { role: 'var(--assist)', name: 'Management All', email: null }
      ]
    },
    { part: 'MD', list: [{ role: 'var(--lead)', name: 'DISP', email: '@', links: [{ instagram: '' }] }] },
    {
      part: 'UIUX',
      list: [
        { role: 'var(--lead)', mw: 'Mobile', name: 'Kwonasart', email: '@', links: [{ instagram: '' }] },
        { role: 'var(--lead)', mw: 'Web', name: 'DISP', email: '@', links: [{ instagram: '' }] }
      ]
    },
    {
      part: 'Frontend',
      list: [
        {
          role: 'var(--lead)',
          name: 'Ryn',
          email: 'whiliniong@gmail.com',
          links: [{ instagram: '', github: '' }]
        },
        { role: 'var(--serve)', name: 'Seunghun Byeon', email: '@', links: [{ instagram: '', github: '' }] },
        { role: 'var(--serve)', name: 'JayO', email: '@', links: [{ instagram: '', github: '' }] }
      ]
    },
    {
      part: 'Backend',
      list: [
        {
          role: 'var(--lead)',
          name: 'Jaecheol Jeong',
          email: 'anjwoc@gmail.com',
          links: [{ instagram: '', github: '' }]
        },
        { role: 'var(--serve)', name: 'ash', email: '@', links: [{ instagram: '', github: '' }] }
      ]
    },
    { part: 'Staff', list: [{ role: 'var(--lead)', name: 'All', email: null }] },
    { part: '', list: [{ role: '', name: '', email: null }] }
  ];
  const [modal, setModal] = useState(false);
  return <CreditLayout DirectorList={DirectorList} modal={modal} setModal={setModal} />;
};

export default Credit;
