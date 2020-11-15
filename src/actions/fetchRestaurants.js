import React, { Component } from 'react';

const api_url = "http://localhost:3000/api/v1/restaurants";

class AllRestaurants extends Component {
    constructor(props) {
        super(props)

        this.state = {
            restaurants: []
        }
    }

    componentDidMount() {
        this.getRestaurants();
    }

    getRestaurants() {
        fetch(api_url)
        .then(resp => resp.json())
        .then(response_items => {
            this.setState({
                restaurants: response_items
            })
        });
    }

    render() {
        console.log(this.state.restaurants);
        return(
            <h4>Hello World</h4>
        )
    }
}

export default AllRestaurants;