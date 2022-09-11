import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products'
import Historico from './pages/Historico'
import Lances from './pages/Lances'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/lances" element={<Lances />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

