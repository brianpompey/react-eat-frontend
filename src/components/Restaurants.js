import React from 'react'
import {Route, Link} from 'react-router-dom'
import RestaurantsContainer from '../containers/RestaurantsContainer.js'

const Restaurants = (props) => {
    console.log(props.restaurants);

  return (
    <div>
      {props.restaurants.map(rest =>
        <>
        <li style={{textAlign: 'center'}} key={rest.id}>
            <Link to={rest.website}>{rest.name} </Link> - {rest.cuisine} Cuisine in {rest.location}
           {/* <a href={rest.website} target="_blank" rel="noreferrer">{rest.name}</a> - {rest.cuisine} Cuisine in {rest.location} */}
        </li>
        <br />
        </>
      )}
    </div>
    )
}

export default Restaurants;