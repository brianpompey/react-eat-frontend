import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSelection } from '../actions/addSelection';

class OrderSelection extends Component {

    state = {
        order: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addSelection(this.state, this.props.restaurant.id)
        this.setState({
          order: ''
        })
    }

    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <label>Order:</label>
                <input type="text" name="order" placeholder="What would you like to order?" value={this.state.order} onChange={this.handleChange}/>
                <input type="submit"/>
              </form>
            </div>
        )
    }
}

export default connect(null, {addSelection})(OrderSelection);