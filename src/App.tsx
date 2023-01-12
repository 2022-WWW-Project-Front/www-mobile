import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import Artwork from './page/Artwork';
import Artist from './page/Artist';
import Info from './page/Info';
import Visual from './components/artwork/Visual';
import Media from './components/artwork/Media';
import Fashion from './components/artwork/Fashion';
import Living from './components/artwork/Living';
import ArtistDetail from './components/artist/ArtistDetail';
import ArtistList from './components/artist/ArtistList';
import WwwLayout from './layout/info/WwwLayout';
import HowLayout from './layout/info/HowLayout';
import Credit from './components/info/Credit';
import Font from './components/info/Font';
import Header from './components/common/Header';
import Footer from './layout/common/Footer';
import ArtworkDetail from './components/artwork/ArtworkDetail';
import { Provider } from 'react-redux';
import { store } from './stores';
import TopBtn from './layout/common/TopBtn';

import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { isMobile } from 'react-device-detect';

export const App = () => {
  // useEffect(() => {
  //   if (!isMobile) {
  //     window.location.href = 'https://wwweb.kr/';
  //   }
  // }, []);
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="artwork" element={<Artwork />}>
          <Route path="visual" element={<Visual />} />
          <Route path="media" element={<Media />} />
          <Route path="fashion" element={<Fashion />} />
          <Route path="living" element={<Living />} />
        </Route>
        <Route path="artwork-detail/:artistId" element={<ArtworkDetail />} />
        <Route path="artist" element={<Artist />}>
          <Route index element={<ArtistList />} />
          <Route path=":artistId" element={<ArtistDetail />} />
        </Route>
        <Route path="www" element={<Info />}>
          <Route path="exhibition" element={<WwwLayout />} />
          <Route path="how" element={<HowLayout />} />
          <Route path="credit" element={<Credit />} />
          <Route path="font" element={<Font />} />
        </Route>
      </Routes>
      <TopBtn />
      <Footer />
    </Provider>
  );
};

export default App;
