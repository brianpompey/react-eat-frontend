export default function userReducer(state = {users: []}, action) {
    switch (action.type) {
        case 'ADD_USER':
            return {...state, users: [...state.users, action.payload]}

        default:
            return state
    }
}