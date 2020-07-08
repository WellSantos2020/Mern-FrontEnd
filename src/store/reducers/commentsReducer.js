import {GET_COMMENTS} from "../actions/types";
const initialState ={
    items:[]
}
export default function comments(state = initialState , action) {
    
    switch (action.type) {
      case GET_COMMENTS:
          
        return {
          ...state,
          
            items: action.payload,
            
          
        }
      
      default:
        return state
    }
  }