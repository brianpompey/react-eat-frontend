import React, { Component } from 'react';
import SearchBar from './SearchBar.js'

class RestaurantChoice extends Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    
    render(props) {
        return (
          <div>
            <h6>Hello {props} !!</h6>
            <h6>What are you craving Today?</h6>
            <SearchBar />
          </div>
        )
    }
}

export default RestaurantChoice;