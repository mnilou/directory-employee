import React from 'react';
import SearchName from './SearchName.js';
import '../styles/Nav.css';

function Nav({handleSearchChange}) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchName handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default Nav;
