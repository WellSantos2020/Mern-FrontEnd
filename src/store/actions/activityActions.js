import {GET_ACTIVITIES} from "./types";



export const get_activities = (id) => dispatch => {
    
    fetch(`http://localhost:5000/activities/${id}`)

        .then(res => res.json())
        .then(activities =>

               dispatch({
                type: GET_ACTIVITIES,
                payload: activities
            }) 
        );
};