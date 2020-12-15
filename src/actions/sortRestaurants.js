const sorted = restaurants.sort((a, b) => a.name.localeCompare(b.name))
    console.log(sorted);
      dispatch({
        type: SORT_RESTAURANTS,
        payload: sorted
      })