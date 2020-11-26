import React from 'react';
import { NavLink } from 'react-router-dom';

import '../Navbar.css'

const NavBar = (props) => {
  return (
    <div className="navbar">
      <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/newrestaurant">New Restaurant</NavLink></li>
          <li><NavLink to="/allrestaurants">All Restaurants</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;