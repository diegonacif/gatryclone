import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,

} from 'react-router-dom';

import PagesPromotionsSearch from './Promotion/Search/Search';
import App from '../App';

const Root = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PagesPromotionsSearch />} />
      <Route path="app" element={<App />} />
    </Routes>
  </BrowserRouter>
}

export default Root;