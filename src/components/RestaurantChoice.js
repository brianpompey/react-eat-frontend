import React, { Component } from 'react';

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
            <form>
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

export default RestaurantChoice;