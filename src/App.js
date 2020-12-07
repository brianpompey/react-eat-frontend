import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRestaurants from './components/Restaurants.js';
import {connect} from 'react-redux'
import Footer from './components/Footer'
import RestaurantsContainer from './containers/RestaurantsContainer'
import './App.css';

function App() {
  return (
    <>
    <RestaurantsContainer/>
    <Footer />
    </>
  );
}

export default App;
