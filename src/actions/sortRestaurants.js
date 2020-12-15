export function sortRestaurants() {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/restaurants')
      .then(resp => resp.json())
      .then(sortedRestaurants => dispatch({
        type: 'SORT_RESTAURANTS',
        payload: sortedRestaurants.sort((a, b) => a.name.localeCompare(b.name))
      }))
    }
}