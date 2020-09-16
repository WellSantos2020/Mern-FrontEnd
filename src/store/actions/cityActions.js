import {GET_CITIES} from "./types";

/* export const getCities=()=>dispatch=>{
    fetch("http://localhost:5000/cities/all")
    .then(response=>response.json())
    .then(res=>
        dispatch({
            type:GET_CITIES,
            payload:res
        })
    )
    .catch(err=>console.log(err))
} */

export const getCities = () => dispatch => {
    console.log('get cities')
    fetch('http://localhost:5000/cities/all')
        .then(res => res.json())
        .then(cities =>{
          console.log(cities)
            dispatch({
                type: GET_CITIES,
                payload: cities
            })
        }
            
        );
};