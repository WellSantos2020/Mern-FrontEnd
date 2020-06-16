import {GET_CITIES} from "./actions/types"
const initialState ={
    items:[]
}
export default function cities(state = initialState , action) {
    
    switch (action.type) {
      case GET_CITIES:
          
        return {
          ...state,
          
            items: action.payload,
            
          
        }
      
      default:
        return state
    }
  }