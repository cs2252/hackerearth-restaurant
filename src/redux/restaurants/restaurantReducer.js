import { FETCH_RESTAURANTS_REQUEST, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILURE } from "./restaurantsTypes";

const initialState={
    loading:false,
    restaurants:[],
    error:''
}
const restaurantReducer=(state=initialState,action)=>{
    // console.log("rduced called")
    switch (action.type) {
        case FETCH_RESTAURANTS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_RESTAURANTS_SUCCESS:
            return {
                loading:false,
                restaurants:action.payload,
                error:''
            }
        case FETCH_RESTAURANTS_FAILURE:
            return {
                loading:false,
                restaurants:[],
                error:action.payload
            }
    
        default:
            return state;
    }
}
export default restaurantReducer