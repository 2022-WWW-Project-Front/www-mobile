import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Artwork from './page/Artwork';
import Artist from './page/Artist';
import Info from './page/Info';
import Visual from './components/artwork/Visual';
import Media from './components/artwork/Media';
import Fashion from './components/artwork/Fashion';
import Living from './components/artwork/Living';
import ArtistDetail from './components/artist/ArtistDetail';
import ArtistList from './components/artist/ArtistList';
import Www from './components/info/Www';
import How from './components/info/How';
import Credit from './components/info/Credit';
import Font from './components/info/Font';
import Header from './components/header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="artwork" element={<Artwork />}>
          <Route path="visual" element={<Visual />} />
          <Route path="media" element={<Media />} />
          <Route path="fashion" element={<Fashion />} />
          <Route path="living" element={<Living />} />
        </Route>
        <Route path="artist" element={<Artist />}>
          <Route index element={<ArtistList />} />
          <Route path=":artistId" element={<ArtistDetail />} />
        </Route>
        <Route path="www" element={<Info />}>
          <Route index element={<Www />} />
          <Route path="how" element={<How />} />
          <Route path="credit" element={<Credit />} />
          <Route path="font" element={<Font />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
