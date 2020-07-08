import {GET_COMMENTS,POST_COMMENTS,DELETE_COMMENTS,PUT_COMMENTS} from "./types";




export const getComments = (id) => dispatch => {
    
    fetch(`http://localhost:5000/comments/${id}`)

        .then(res => res.json())
        .then(comments =>

               dispatch({
                type: GET_COMMENTS,
                payload: comments
            }) 
        );
};








export const postComments = (id) => dispatch => {
    const body=JSON.stringify({text:""})
    
    fetch(`http://localhost:5000/comments/${id}`,{
 
    method: "POST",
    headers:{"Content-Type":"application/json"},
    body

})

        .then(res => res.json())
        .then(comments =>

               dispatch({
                type: POST_COMMENTS,
                payload: comments
            }) 
        
        );
};






export const deleteComments = (id) => dispatch => {
    
    fetch(`http://localhost:5000/comments/${id}`,{

    method: "DELETE",
    headers:{"Content-Type":"application/json"},
    

})


        .then(res => res.json())
        .then(comments =>

               dispatch({
                type: POST_COMMENTS,
                payload: comments
            }) 
        );
};





export const putComments = (id) => dispatch => {
    
    fetch(`http://localhost:5000/comments/${id}`,{

        method: "PUT",
        headers:{"Content-Type":"application/json"},
        
    

})

        .then(res => res.json())
        .then(comments =>

               dispatch({
                type: PUT_COMMENTS,
                payload: comments
            }) 
        );
};

