    import React, { Component } from 'react'
    import { connect } from 'react-redux'
    import {getComments} from "../store/actions/commentActions";
import { Card } from 'react-bootstrap';
    
    
    class Comments extends Component {
        constructor(props){
            super(props)     
            this.state={
                text:"",
                
    
    
        }
        
        this.addChange=this.addChange.bind(this)
        }
        
       componentDidMount(){

        this.props.getComments("5e615f0d1c9d44000056c330")

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
                      return(
                      <div>
                          <img src={comment.userpicture} height="40px"/>
                       <h4>{comment.text}</h4>
                      </div>
                     )
                   })} 
                 {/*   <Card  htmlFor="name"> <b>Name</b> </Card>
                   <input 
                            type="text" 
                            placeholder="Enter your name" 
                            name="name" required 
                            vaule={this.state.name}
                            onChange={this.addChange}>
                        </input>
                    
                        <Card htmlFor="text"><b>Text:</b></Card>
                        <input 
                            type="text" 
                            placeholder="Enter your Comments" 
                            name="Comments" required
                            vaule={this.state.email}
                            onChange={this.addChange}>
                        </input>
 */}
                
                
                </div>
            )
        }
    }
    const mapStateToProps=state=>({
        comments: state.comments.items
    })


export default connect(mapStateToProps,{getComments}) (Comments)