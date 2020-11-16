import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import UserForm from './components/UserForm.js';
import AllRestaurants from './components/Restaurants.js'
import NewRestaurantForm from './components/NewRestaurantForm.js'
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="nav">
        <NavBar/>
        <Switch>
          <Route exact path="/newrestaurant" component={NewRestaurantForm}/>
          <Route exact path="/allrestaurants" component={AllRestaurants}/>
        </Switch>
      </div>
      <div id="container">
        <Header/>
        <UserForm />
      </div>
    </Router>
  );
}

export default App;
