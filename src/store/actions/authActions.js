import {GET_USER,LOAD_USER, LOG_OUT} from "./types";
import jwt_decode from "jwt-decode"
import JwtDecode from "jwt-decode";


export const googleUser=(token)=> dispatch=>{
     
     const decoded = jwt_decode(token) 
    console.log(decoded)
   
     
    




};




export const logoutUser =()=>dispatch=>{
    console.log("logoutUser")    
    dispatch({type:LOG_OUT}) 
        
    }





export const loadUser =()=> dispatch=>{
   
     const token= localStorage.token   
    console.log(token)
     fetch("http://localhost:5000/auth/",{
        
        headers:{
            "Content-Type":"application/json",
            "Authorization":"bearer "+token
    },
        
    
    })
    .then(res=>res.json())
    .then(user=>{
          dispatch({
            type:LOAD_USER,
            payload: user
    
        })  
        console.log(user)
    })
    .catch(error=>console.log(error.message))
     
    }

    export const loginUser =(email,password)=> dispatch=>{
        const body=JSON.stringify({email,password})
            
        fetch("http://localhost:5000/auth/login",{
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
            dispatch(loadUser())
        })
        .catch(error=>console.log(error.message))
        
        }
