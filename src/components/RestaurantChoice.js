import React, { Component } from 'react';
import SearchBar from './SearchBar.js'

class RestaurantChoice extends Component {
    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
          <div>
            <h6>Hello !!</h6>
            <h6>What are you craving Today?</h6>
            <SearchBar />
          </div>
        )
    }
}

export default RestaurantChoice;