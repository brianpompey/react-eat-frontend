import React from 'react'
import {Route, Link} from 'react-router-dom'

const Restaurants = (props) => {

  return (
    <div>
      {props.restaurants.map(rest =>
        <>
        <li style={{textAlign: 'center'}} key={rest.id}><a href={rest.website} target="_blank" rel="noreferrer">{rest.name}</a> - {rest.cuisine} Cuisine in {rest.location}</li>
        <br />
        </>
      )}
    </div>
    )
}

export default Restaurants;