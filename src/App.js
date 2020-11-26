import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRestaurants from './components/Restaurants.js';
import {connect} from 'react-redux'
import RestaurantsContainer from './containers/RestaurantsContainer'
import './App.css';

function App() {
  return (
    <RestaurantsContainer/>
  );
}

export default App;
