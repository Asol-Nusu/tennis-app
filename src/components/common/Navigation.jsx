import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/courts">Courts</Link></li>
        <li><Link to="/marketplace">Marketplace</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
