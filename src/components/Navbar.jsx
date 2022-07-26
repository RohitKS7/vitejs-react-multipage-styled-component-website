// import { useState } from 'react';

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <NavLink to="/service">SERVICES</NavLink>
            <NavLink to="/contact">CONTACT US</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
