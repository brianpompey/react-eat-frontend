import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRestaurants from './components/Restaurants.js';
import NewRestaurantForm from './components/NewRestaurantForm.js';
import HomePage from './components/HomePage.js'
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import NavBar from './components/Navbar.js';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <hr />


      </div>
      <div id="container">
        <Switch>
          <Link exact path="/newrestaurant" component={NewRestaurantForm}/>
          <Link exact path="/allrestaurants" component={AllRestaurants}/>
          <Link exact path="/" component={HomePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
