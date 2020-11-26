import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchRestaurants} from '../actions/fetchRestaurants'
import {
    BrowserRouter as Router,
    Switch,
    Link
} from "react-router-dom";
import NewRestaurantForm from '../components/NewRestaurantForm.js';
import HomePage from '../components/HomePage.js'
import NavBar from '../components/Navbar'

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
                    <Link exact path="/newrestaurant" component={NewRestaurantForm}/>
                    <Link exact path="/allrestaurants" render={(routerProps) => <Restaurants {...routerProps} restaurants={this.props.restaurants}/>}/>
                    <Link exact path="/" component={HomePage} />
                    </Switch>
                </div>
            </Router>
        )
    }

}

    const mapStateToProps = state => {
        return {
          accounts: state.reataurants
        }
    }





export default connect(mapStateToProps, {fetchRestaurants})(RestaurantsContainer);