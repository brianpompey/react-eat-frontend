const initialState = {
    restaurant: {
        name: '',
        website: '',
        location: '',
        cuisine: ''
    },
    restaurants: []
}

export default function restaurantReducer (state = initialState, action) {
 
    switch(action.type){
        case 'FETCH_RESTAURANTS':
            return {
                restaurants: action.payload
            }
        case 'ADD_RESTAURANT':
            return {
                restaurant: action.payload
            }

        default:
            return state 
    }

}