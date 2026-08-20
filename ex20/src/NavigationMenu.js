import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '16px', padding: '16px', background: '#333' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
