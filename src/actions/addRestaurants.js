export const addRestaurants = (data) => {

    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/restaurants', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(restaurant => dispatch({type: 'ADD_RESTAURANT', payload: restaurant}))
    }
}