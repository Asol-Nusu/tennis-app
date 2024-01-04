// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/common/Navigation';
import Home from './components/home/Home';
import CommunityPage from './components/community/CommunityPage';
import CourtsPage from './components/court/CourtsPage';
import MarketplacePage from './components/marketplace/MarketplacePage';

const App = () => {
  return (
    <Router>
      <Navigation /> {/* Include the Navigation component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/courts" element={<CourtsPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
      </Routes>
    </Router>
  );
};

export default App;