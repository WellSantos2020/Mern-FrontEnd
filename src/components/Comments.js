    import React, { Component } from 'react'
    import { connect } from 'react-redux';
    import {getComments} from "../store/actions/commentActions";
    import { Card } from 'react-bootstrap';
    import {AiOutlineCloseCircle} from 'react-icons/ai';
    import dateFormat from 'dateformat';
    import { BsArrowReturnLeft } from "react-icons/bs";
    
 
    class Comments extends Component {
        constructor(props){
            super(props)     
            this.state={
                text:"",
                
    
    
        }
        
        this.addChange=this.addChange.bind(this)
        }
        
       componentDidMount(){

        this.props.getComments(this.props.id )

       }


        addChange=(e)=>{
            this.setState({[e.target.name]:e.target.value})
            
    
        }
        
       /*  submitComment(e) {
            e.preventDefault()
            const comments =this.state.submitComments;
          
            this.props.getComments(comments)
           
         }
        
         */
        render() {

          
            return (
            
              
                <div>
                    
                   {this.props.comments.map(comment=>{
                       
                       const now = dateFormat(comment.date, " mmmm dS, yyyy");
                  
                      return(
                      <div>
                          
                          <img src={comment.userpicture} height="40px"/>
                       <div type="close" className="close-button" style={{borderRadius:"30px"}} > <AiOutlineCloseCircle/> </div>
                       <h6>{comment.name}</h6>
                       <p>{comment.text} </p>
                       <p>{now}</p>
                       <div type="return" className="return-button" style={{borderRadius: "10px"}}> <BsArrowReturnLeft/></div>
                      </div>
                     )
                   })} 
                 
                
                
                </div>
            
     
            )
            
        }
    }
    const mapStateToProps=state=>({
        comments: state.comments.items
    })


export default connect(mapStateToProps,{getComments}) (Comments)