import React from 'react';
import './Navbar.css'; // Import your custom CSS or styling

const Navbar = ({ getUsers }) => {
  return (
    <nav className="navbar">
      <div className="brand-name">Hello Everyone!</div>
      <button onClick={getUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;
