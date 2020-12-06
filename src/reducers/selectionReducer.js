export default function selectionReducer(state = {order: []}, action) {
    switch (action.type) {
        case 'ADD_SELECTION':
            return {...state, orders: [...state.orders, action.payload]}

        default:
            return state
    }
}