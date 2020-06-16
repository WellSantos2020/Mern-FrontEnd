import {GET_ITINERARIES} from "../actions/types"
const initialState ={
    items:[]
}
export default function cities(state = initialState , action) {
    
    switch (action.type) {
      case GET_ITINERARIES:
          
        return {
          ...state,
          
            items: action.payload,
            
          
        }
      
      default:
        return state
    }
  }