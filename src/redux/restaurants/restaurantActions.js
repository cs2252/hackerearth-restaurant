import { FETCH_RESTAURANTS_REQUEST, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILURE } from "./restaurantsTypes"
import axios from 'axios'
// imCSVReaderport CSVReader
export const fetchRestaurantsRequest=()=>{
    return{
        type:FETCH_RESTAURANTS_REQUEST
    }
}
export const fetchRestaurantsSuccess=(restaurants)=>{
    return {
        type:FETCH_RESTAURANTS_SUCCESS,
        payload:restaurants
    }
}
export const fetchRestaurantsFailure=(error)=>{
    return {
        type:FETCH_RESTAURANTS_FAILURE,
        payload:error
    }
}
export const fetchRestaurants=()=>{
    return dispatch=>{
        // console.log("before fetchign data")
        dispatch(fetchRestaurantsRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            console.log("insdie resposse")
            dispatch(fetchRestaurantsSuccess(response.data))
            // console.log(response)
        })
        .catch(error=>{
            console.log(error)
            dispatch(fetchRestaurantsFailure(error.message))
        })
          
    }

}