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
            <div id="restaurant container">
                <ul>
                    {this.state.restaurants.map((rest) => (
                        <li key={rest.id}><a href={rest.website} target="_blank" rel="noreferrer">{rest.name}</a> - {rest.cuisine} Cuisine in {rest.location}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default AllRestaurants;