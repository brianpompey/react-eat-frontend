import React, { Component } from 'react';
import {AllRestaurants} from '../actions/fetchRestaurants'

class RestaurantsContainer extends Component {

    componentDidMount() {
        this.props.fetchRestaurants()
    }

}

export default RestaurantsContainer;