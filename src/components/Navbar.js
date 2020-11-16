import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
          <li><NavLink to="/newrestaurant">New Restaurant</NavLink></li>
          <li><NavLink to="/allrestaurants">All Restaurants</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;