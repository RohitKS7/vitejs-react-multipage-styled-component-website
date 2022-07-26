// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
  return (
    <>
      <header>
        {/* whenever koi click on logo, go to home page */}
        <NavLink to="/">
          <img src="" alt="logo" />
        </NavLink>
        <Navbar/>
      </header>
    </>
  );
}

export default Header;
