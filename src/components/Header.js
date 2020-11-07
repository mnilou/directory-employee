import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p className="directions">Use the search box to find an employee by name or filter by category</p>
        <p></p>
      </div>
    )
  }

export default Header;