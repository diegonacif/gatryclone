import React from 'react';
import './index.css';
import PagesPromotionForm from './pages/Promotion/Form/Form';
import PagesPromotionsSearch from './pages/Promotion/Search/Search';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,

} from 'react-router-dom';

const rootElement = document.getElementById("root");
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagesPromotionsSearch />} />
        <Route path="/create" element={<PagesPromotionForm />} />
        <Route path="/edit/:id" element={<PagesPromotionForm />} />
      </Routes>    
    </BrowserRouter>,
    rootElement
  );

/* ReactDOM.render(
  <React.StrictMode>
      <Root />
  </React.StrictMode>,
  document.getElementById('root')
); */

