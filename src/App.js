import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import AllRestaurants from './actions/fetchRestaurants.js'
import './App.css';

function App() {
  return (
    <div id="app">
      <Navbar />
      <Header />
      <AllRestaurants />
    </div>
  );
}

export default App;
