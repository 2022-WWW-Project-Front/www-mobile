import React from 'react';
import axios from 'axios';

import HomeLayout from '../../layout/home/HomeLayout';

const Home = () => {
  const downloadBook = async () => {
    const url = 'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/common/www_catalogue.pdf';
    // const response = await axios.get<Blob>(url, { responseType: 'blob' });
    // const blob = response.data;

    const el = document.createElement('a');
    // el.href = URL.createObjectURL(new Blob([blob]));
    el.href = url;
    el.target = '_blank';
    // el.download = 'www_catalogue.pdf';
    el.dispatchEvent(new MouseEvent('click'));

    document.body.appendChild(el);
    el.click();
  };
  return <HomeLayout downloadBook={downloadBook} />;
};

export default Home;
