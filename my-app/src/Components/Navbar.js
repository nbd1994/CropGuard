
import './Navbar.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
           <scan>Unity</scan>
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
