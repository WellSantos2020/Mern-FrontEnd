import {GET_USER,LOG_OUT,ADD_FAVORITES,REMOVE_FAVORITES,GET_FAV} from "../actions/types"


const initialState ={
    items:[],
    favoriteItineraries:[]
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
      
        case ADD_FAVORITES:    
        return {
          ...state,
          
            favoriteItineraries: action.payload,
        }
        case REMOVE_FAVORITES:    
        return {
          ...state,
          
            favoriteItineraries: action.payload,
        }
       
        case GET_FAV:    
        return {
          ...state,
          
            favoriteItineraries: action.payload,
        }

      default:
        return state

    }
  }

 
   

 