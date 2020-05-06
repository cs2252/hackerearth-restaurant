import React from 'react'
import store from '../redux/store'
import { fetchRestaurants } from '../redux'
import { connect } from 'react-redux'
import { useEffect,useState } from 'react'
import { csv } from 'd3'
// import {Provider} from 'react-redux'
function RestaurantComponent({ fetchRestaurants, restaurant }) {
    const [range, setRange] = useState(1)

    useEffect(() => {
        // console.log("fetchrestaurants=",fetchRestaurants)
        // fetchRestaurants();
        // filterData()

    }, [])
    // console.log("restaurant=", restaurant)
    let DataShow= restaurant.loading
    ?"lodadings"
    :restaurant.error?
    restaurant.error
    : restaurant.restaurants.map((restaurant, index) =>
    <li key={index}>{restaurant.id}</li>
).filter(data=>data.key<range*10)
    // const filterData=()=>{
    //     console.log('filterdata called')
    //     // setRange(range+1)
    //     console.log(range)
    //     DataShow=Array.isArray(DataShow)
    //     ?DataShow.filter(data=>data.id>range*10)
    //     :DataShow
    // }
    console.log(restaurant)
    return (

        <div>
            {console.log("rendering")}
            <h2>List of Restaurants</h2>
            <button onClick={fetchRestaurants}>fetch users</button>
            <button onClick={()=>setRange(range+1)}>next </button>
            
               <div>
                {DataShow}
                </div>  
            

        </div>
    )
}
const mapStateToProps = (state) => {
    console.log('state=', state)

    return {
        restaurant: state
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurants())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantComponent)
