import React from 'react'

const Restaurants = (props) => {
    console.log(props.restaurants);

  return (
    <div>
      {props.restaurants.map(rest =>
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

export default Restaurants;