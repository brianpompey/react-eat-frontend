import React from 'react'
import RestaurantsContainer from '../containers/RestaurantsContainer.js'

const Restaurants = (props) => {
    console.log(props.restaurants);

  return (
    <div>
      {props.restaurants.map(rest =>
        <>
        <li style={{textAlign: 'center'}}>
            
            <a key={rest.id} href={rest.website} target="_blank" rel="noreferrer">{rest.name}</a> - {rest.cuisine} Cuisine in {rest.location}
        </li>
        <br />
        </>
      )}
    </div>
    )
}

export default Restaurants;