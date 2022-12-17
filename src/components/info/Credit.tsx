import React from 'react';
import CreditLayout from '../../layout/info/CreditLayout';

const Credit = () => {
  const DirectorList = [
    {
      part: 'Project manager',
      list: [
        { role: 'var(--lead)', name: 'DISP', links: 'https://linktr.ee/dispuni' },
        { role: 'var(--serve)', name: 'Management All', links: null },
        { role: 'var(--assist)', name: 'Artist All', links: null }
      ]
    },
    {
      part: '3D Graphic Design',
      list: [
        { role: 'var(--lead)', name: 'Mery', links: 'https://linktr.ee/mery9711' },
        { role: 'var(--serve)', name: 'kwonasart', links: 'https://linktr.ee/askwonart' }
      ]
    },
    {
      part: '2D Graphic Design',
      list: [
        { role: 'var(--lead)', name: 'Si yeon', email: 'syeons2@naver.com' },
        { role: 'var(--serve)', name: 'yu jin', links: 'https://linktr.ee/_iamyooj' }
      ]
    },
    {
      part: 'Motion Design',
      list: [
        { role: 'var(--lead)', name: 'YANZI', links: 'https://linktr.ee/yanzi_' },
        { role: 'var(--serve)', name: 'Mery', links: 'https://linktr.ee/mery9711' }
      ]
    },
    {
      part: 'Editorial Design',
      list: [
        { role: 'var(--lead)', name: 'yu jin', links: 'https://linktr.ee/_iamyooj' },
        { role: 'var(--serve)', name: 'Si yeon', email: 'syeons2@naver.com' }
      ]
    },
    {
      part: 'VMD',
      list: [
        { role: 'var(--lead)', name: 'Nam Yeonwoo', links: null },
        { role: 'var(--assist)', name: 'Management All', links: null }
      ]
    },
    { part: 'MD', list: [{ role: 'var(--lead)', name: 'DISP', links: 'https://linktr.ee/dispuni' }] },
    {
      part: 'UIUX',
      list: [
        { role: 'var(--lead)', mw: 'Mobile', name: 'Kwonasart', links: 'https://linktr.ee/askwonart' },
        { role: 'var(--lead)', mw: 'Web', name: 'DISP', links: 'https://linktr.ee/dispuni' }
      ]
    },
    {
      part: 'Frontend',
      list: [
        {
          role: 'var(--lead)',
          name: 'Ryn',
          links: 'https://linktr.ee/whilini'
        },
        { role: 'var(--serve)', name: 'Seunghun Byeon', links: 'https://github.com/SeungHun6450' },
        { role: 'var(--serve)', name: 'JayIL', links: 'https://github.com/JaeIL00' }
      ]
    },
    {
      part: 'Backend',
      list: [
        {
          role: 'var(--lead)',
          name: 'Jaecheol Jeong',
          email: 'anjwoc@gmail.com',
          links: 'https://github.com/anjwoc'
        }
      ]
    },
    { part: 'Staff', list: [{ role: 'var(--lead)', name: 'All', links: null }] },
    { part: '', list: [{ role: '', name: '', links: null }] }
  ];
  return <CreditLayout DirectorList={DirectorList} />;
};

export default Credit;
