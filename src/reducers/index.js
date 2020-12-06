import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer.js';
import userReducer from './userReducer';
import selectionReducer from './selectionReducer';

export default combineReducers({
    restaurantReducer,
    userReducer,
    selectionReducer
  })