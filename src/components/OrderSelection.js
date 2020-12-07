import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { addSelection } from '../actions/addSelection';

class OrderSelection extends Component {

    state = {
        order: ''
    }

    handleChange = (event) => {
        this.setState({
            order: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addSelection(this.state.order, this.props.id)
        this.setState({
          order: ''
        });
        this.props.history.push('/');
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

export default withRouter(connect(null, {addSelection})(OrderSelection));