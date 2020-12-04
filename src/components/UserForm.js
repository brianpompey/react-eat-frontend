import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
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
        this.props.history.push('/restaurantchoice');
    }

    /*
    handleClick = (event) => {
      event.preventDefault()
      this.props.history.push('/newrestaurant');
    }

    if (this.state.name === this.props.name) {
          return <Redirect to='/restaurantchoice' />
        }
    */
    
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

export default withRouter(connect(null, {addUsers})(UserForm));