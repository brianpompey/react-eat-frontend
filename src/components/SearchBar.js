import React, { Component } from "react";
import {fetchRestaurants} from '../actions/fetchRestaurants';
import RestaurantsContainer from '../containers/RestaurantsContainer.js'


class SearchBar extends Component {

    state = {
        search : ""
    }

    handleChange = (event) => {
        this.setState({
          search: event.target.value
        })
    };

    render() {

        return(
            <div>
                <form>
                    <input label="Search Restaurants" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default SearchBar;