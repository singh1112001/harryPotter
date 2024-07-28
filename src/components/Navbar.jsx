
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Book</Link>
        </li>
        <li className="navbar-item">
          <Link to="/houses" className="navbar-link">Houses</Link>
        </li>
        <li className="navbar-item">
          <Link to="/spell" className="navbar-link">Spell</Link>
        </li>
        <li className="navbar-item">
          <Link to="/character" className="navbar-link">Character</Link>
        </li>
      </ul>
    </nav>
  );
}
