import {GET_ITINERARIES} from "./types";


export const getItineraries = (id) => dispatch => {
    
    fetch(`http://localhost:5000/itineraries/${id}`)

        .then(res => res.json())
        .then(itineraries =>

               dispatch({
                type: GET_ITINERARIES,
                payload: itineraries
            }) 
        );
};