export const addSelection = (order, restaurantId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/restaurants/${restaurantId}/selections`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({selection: {order} })
      })
      .then(response => response.json())
      .then(restaurant => {
          if (restaurant.error) {
            alert(restaurant.error)
          } else {
            dispatch({type: 'ADD_SELECTION', payload: restaurant})
          }
        }
      )
    }
  }