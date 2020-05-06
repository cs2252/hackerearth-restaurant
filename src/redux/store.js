import {createStore,applyMiddleware} from 'redux'
import restaurantReducer from './restaurants/restaurantReducer'
import thunk from 'redux-thunk'
const store=createStore(restaurantReducer,applyMiddleware(thunk))
export default store;