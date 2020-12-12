import React, { Component } from 'react'


class Restaurants extends Component {
  constructor(props){
    super(props)
    this.state = {
      restaurants: []
    }
  }

  onClick1 = () => {
    this.setState({
      restaurants: this.props.restaurants.sort((a, b) => a.name.localeCompare(b.name))
    })
  }

  onClick2 = () => {
    this.setState({
      restaurants: this.props.restaurants.sort((a, b) => a.id - b.id)
    })
  }

  render() {
  //  console.log(this.props.restaurants.sort((a, b) => a.name.localeCompare(b.name)))
    return (
      <div>
        <button onClick={this.onClick1}>SORT</button>
        <button onClick={this.onClick2}>UNSORT</button>
        <br/>
        {this.props.restaurants.map(rest =>
          <>
          <li key={rest.id} style={{textAlign: 'center'}}>
              
              <a href={rest.website} target="_blank" rel="noreferrer">{rest.name}</a> - {rest.cuisine} Cuisine in {rest.location}
          </li>
          <br />
          </>
        )}
      </div>
      )
        }
}

export default Restaurants;