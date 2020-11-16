import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addRestaurants} from '../actions/addRestaurants';


class NewRestaurantForm extends Component {

    state = {
        name: '',
        website: '',
        location: '',
        cuisine: ''
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addRestaurants(this.state)
        this.setState({
          name: '',
          website: '',
          location: '',
          cuisine: ''
        })
    }
    
    render() {
        return (
          <div>
            <h6>New Restaurant</h6>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder='Name'
                onChange={this.handleChange}
                value={this.state.name}
              />
              <input
                type="text"
                name="website"
                placeholder='Website'
                onChange={this.handleChange}
                value={this.state.website}
              />
              <input
                type="text"
                name="location"
                placeholder='Borough'
                onChange={this.handleChange}
                value={this.state.location}
              />
              <input
                type="text"
                name="cuisine"
                placeholder='Cuisine'
                onChange={this.handleChange}
                value={this.state.cuisine}
              />
            </form>
          </div>
        )
    }
}

export default connect(null, {addRestaurants})(NewRestaurantForm);