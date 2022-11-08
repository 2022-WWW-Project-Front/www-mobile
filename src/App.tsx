import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Artwork from './page/Artwork';
import Artist from './page/Artist';
import Info from './page/Info';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artwork" element={<Artwork />}>
          <Route path="visual" />
          <Route path="media" />
          <Route path="fashion" />
          <Route path="living" />
        </Route>
        <Route path="/artist" element={<Artist />}>
          <Route path="" />
          <Route path=":artistId" />
        </Route>
        <Route path="/www" element={<Info />}>
          <Route path="" />
          <Route path="/how" />
          <Route path="/credit" />
          <Route path="/font" />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
