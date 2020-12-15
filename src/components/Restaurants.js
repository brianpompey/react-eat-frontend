import React, { Component } from 'react'


class Restaurants extends Component {
  constructor(props){
    super(props)
    this.state = {
      restaurants: [],
      isSorted: false
    }
  }

  onClick1 = () => {
    this.setState({
      restaurants: this.props.restaurants.sort((a, b) => a.name.localeCompare(b.name)),
      isSorted: true
    })
  }

  onClick2 = () => {
    this.setState({
      restaurants: this.props.restaurants.sort((a, b) => a.id - b.id),
      isSorted: false
    })
  }

  sortButton = () => {
    const isSorted = this.state.isSorted;

    return isSorted ? <button onClick={this.onClick2}>UNSORT</button> : <button onClick={this.onClick1}>SORT</button>
  }



  render() {
  //  console.log(this.props.restaurants.sort((a, b) => a.name.localeCompare(b.name)))
    return (
      <div>
        {this.sortButton()}
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