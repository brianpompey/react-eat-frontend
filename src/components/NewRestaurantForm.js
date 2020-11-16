import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addRestaurants} from '../actions/addRestaurants';


class NewRestaurantForm extends Component {

    state = {
        name: ''
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
            <h6>Hey There! What is your name?</h6>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder='Name'
                onChange={this.handleChange}
                value={this.state.name}
              />
            </form>
          </div>
        )
    }
}

export default connect(null, {addRestaurants})(NewRestaurantForm);