
import './Navbar.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar hidden md:block">
      <div className="navbar-content">
        <div className="navbar-left  bg-zinc-700">
            <span className=' font-extrabold shadow-xl text-white'>
            CG
            </span>
        </div>
        <div className="navbar-right">
          <span>Status</span>
          <span>Quick Access</span>
          <span>Reports</span>
          <span>logout</span>
          <span>profile</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
