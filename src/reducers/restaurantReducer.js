const initialState = {
    restaurant: {
        name: '',
        website: '',
        location: '',
        cuisine: ''
    },
    restaurants: []
}

export default function restaurantReducer(state = initialState, action) {
 
    switch(action.type){
        case 'FETCH_RESTAURANTS':
            return {
                restaurants: action.payload
            }
        case 'ADD_RESTAURANT':
            return {
                restaurant: action.payload
            }
        case 'SORT_RESTAURANTS':
            return {
                sortedRestaurants: action.payload
            }
        case 'ADD_SELECTION':
            let restaurants = state.restaurants.map(restaurant => {
                if (restaurant.id === action.payload.id) {
                    return action.payload
                } else {
                    return restaurant
                }
            })
            return {...state, restaurants: restaurants}
        case 'DELETE_SELECTION':
            let restaurantss = state.restaurants.map(restaurant => {
                if (restaurant.id === action.payload.id) {
                    return action.payload
                } else {
                    return restaurant
                }
            })
            return {...state, restaurants: restaurantss}

        default:
            return state 
    }

}