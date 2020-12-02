import react, { Component } from React;

class RestaurantChoice extends Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
          <div>
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