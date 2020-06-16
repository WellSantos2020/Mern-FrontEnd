import {GET_USER} from "../actions/types"
import {LOG_OUT}  from "../actions/types"

const initialState ={
    items:[]
}





export default function user(state = initialState , action) {
     
    switch (action.type) {
        
      case GET_USER:
        localStorage.setItem('token',action.payload.token)
          
        return {
          ...state,
          
            items: action.payload,
        }
    
        case LOG_OUT:
        localStorage.removeItem('token')
        return{
         ...state,

         loggedIn: false,
         token: null

         

        }
      
      default:
        return state
    }
  }

 
   

 