import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchRestaurants} from '../actions/fetchRestaurants';
import {sortRestaurants} from '../actions/fetchRestaurants';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NewRestaurantForm from '../components/NewRestaurantForm.js';
import HomePage from '../components/HomePage.js'
import Restaurants from '../components/Restaurants.js'
import NavBar from '../components/Navbar'
import RestaurantChoice from '../components/RestaurantChoice';
import OrderSelection from '../components/OrderSelection';

class RestaurantsContainer extends Component {

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <hr />
                </div>
                <div id="container">
                    <Switch>
                    <Route exact path="/newrestaurant" component={NewRestaurantForm}/>
                    <Route exact path="/allrestaurants" render={(routerProps) => <Restaurants {...routerProps} restaurants={this.props.restaurants}/>}/>
                    <Route exact path="/restaurantchoice" render={(props) => <RestaurantChoice name={props.match.params.name}/>}/>
                    <Route exact path="/restaurant/:id" render={(props) => <OrderSelection id={props.match.params.id} /> } />
                    <Route exact path="/" component={HomePage} />
                    </Switch>
                </div>
            </Router>
        )
    }

}

    const mapStateToProps = state => {
        return {
          restaurants: state.restaurants
        }
    }





export default connect(mapStateToProps, {fetchRestaurants})(RestaurantsContainer);