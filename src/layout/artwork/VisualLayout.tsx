import React, { useEffect } from 'react';
import { position } from '../../util';

const VisualLayout = () => {
  const test = [
    { url: '/assets/test/1.jpg' },
    { url: '/assets/test/2.jpg' },
    { url: '/assets/test/3.jpg' },
    { url: '/assets/test/4.jpg' },
    { url: '/assets/test/5.jpg' },
    { url: '/assets/test/6.jpg' },
    { url: '/assets/test/7.jpg' },
    { url: '/assets/test/8.jpg' },
    { url: '/assets/test/9.jpg' },
    { url: '/assets/test/10.jpg' },
    { url: '/assets/test/11.jpg' },
    { url: '/assets/test/12.jpg' },
    { url: '/assets/test/13.jpg' },
    { url: '/assets/test/14.jpg' },
    { url: '/assets/test/15.jpg' }
  ];
  useEffect(() => {
    test.map((i) => {
      position(i);
    });
  }, [test]);
  return <div></div>;
};

export default VisualLayout;
