import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Redirect
} from "react-router-dom";
import {addUsers} from '../actions/addUsers';


class UserForm extends Component {

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
        this.props.addUsers(this.state)
        this.setState({
          name: '',
        });
    }

    /*
    handleClick = (event) => {
      event.preventDefault()
      this.props.history.push('/newrestaurant');
    }
    */
    
    render() {
        if (this.state.name === this.props.name) {
          return <Redirect to='/restaurantchoice' />
        }
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

export default connect(null, {addUsers})(UserForm);