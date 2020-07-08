import {GET_USER, ADD_FAVORITES,REMOVE_FAVORITES,GET_FAV} from "./types";
import { loadUser } from "./authActions";

export const registerUser =(name,email,password,image)=> dispatch=>{
const body=JSON.stringify({name,email,password,image})
    
fetch("http://localhost:5000/users/register",{
    method: "POST",
    headers:{"Content-Type":"application/json"},
    body

})
.then(res=>res.json())
.then(user=>{
     dispatch({
        type:GET_USER,
        payload: user

    }) 
    dispatch(loadUser)
})
.catch(error=>console.log(error.message))

}

export const addFavorites=(itineraryId,cityId)=>dispatch=>{
const body=JSON.stringify({itineraryId,cityId})
    console.log(itineraryId+','+cityId)

    fetch("http://localhost:5000/users/addfavorites",{
    method: "POST",
    headers:{"Content-Type":"application/json","Authorization":`bearer ${localStorage.token}`},
    body

})
.then(res=>res.json())
.then(response=>{
    dispatch({
       type:ADD_FAVORITES,
       payload: response

   }) }
)

.catch(error=>console.log(error.message))
}

export const removeFavorites=(itineraryId)=>dispatch=>{
    fetch("http://localhost:5000/users/removefav/"+itineraryId,{
        method: "POST",
        headers:{"Content-Type":"application/json","Authorization":`bearer ${localStorage.token}`},
        
    
    })
    .then(res=>res.json())
    .then(response=>{
        dispatch({
           type:REMOVE_FAVORITES,
           payload: response
    
       }) }
    )

    }
    export const getfav=()=>dispatch=>{
        fetch("http://localhost:5000/users/getfav/",{
            method: "GET",
            headers:{"Content-Type":"application/json","Authorization":`bearer ${localStorage.token}`},
            
        
        })
        .then(res=>res.json())
        .then(response=>{
            console.log(response)
            dispatch({
               type:GET_FAV,
               payload: response
        
           }) }
        )

    
    .catch(error=>console.log(error.message))}



        
