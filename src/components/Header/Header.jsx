import React from 'react';
import data from '../../data/data.json';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <h1>{data.name}</h1>
      <p>{data.role}</p>
    </header>
  );
}

export default Header;
