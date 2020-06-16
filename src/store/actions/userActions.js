import {GET_USER} from "./types";
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








