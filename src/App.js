import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import UserForm from './components/UserForm.js';
import AllRestaurants from './actions/fetchRestaurants.js'
import {connect} from 'react-redux'
import './App.css';

function App() {
  return (
    <div id="app">
      <Navbar />
      <Header />
      <UserForm />
      <AllRestaurants />
    </div>
  );
}

export default App;
