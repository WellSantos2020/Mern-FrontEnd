import {GET_USER,LOAD_USER} from "../actions/types"


const initialState ={
    items:[]
}





export default function cities(state = initialState , action) {
     
    switch (action.type) {
        
      case GET_USER:
        localStorage.setItem('token',action.payload.token)
          
        return {
          ...state,
          
            items: action.payload,
        }
      
        case LOAD_USER:
            console.log(action.payload)
          return {
          ...state,
             item: action.payload,
             loggedIn: true
        }
      default:
        return state
    }
  }