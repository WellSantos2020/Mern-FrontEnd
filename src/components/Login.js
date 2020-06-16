import React, { Component } from 'react'
import { connect } from 'react-redux'
import  './login.css'
import {loginUser} from '../store/actions/authActions'
 
class Login extends Component {
    constructor(props){
        super(props)     
        this.state={
            
            email:"",
            password:"",
            


        }
     this.submitUser=this.submitUser.bind(this)
     this.addChange=this.addChange.bind(this)
 
    }
    addChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        
    
     }
       submitUser=(e)=> {
       e.preventDefault()
       const email= this.state.email;
       const password=this.state.password;
    
       console.log(email,password)
       
       
       
       this.props.loginUser(email,password)
       this.props.history.push("/cities")
      
     } 
    render() {
        return (
            <div>
              <form onSubmit={this.submitUser} style={{marginLeft: 30, padding:10}}>
                    <div> 
                       
                        <input 
                            type="text" 
                            placeholder="Enter your email" 
                            name="email" required
                            vaule={this.state.email}
                            onChange={this.addChange}>
                        </input>
                        <label htmlFor="psw"><b>Password</b></label>
                        <input 
                            type="password" 
                            placeholder="Enter your Password" 
                            name="password" required
                            value={this.state.password}
                            onChange={this.addChange}>
                        </input>
                        
                     
                        <button type="submit" className="login-button" style={{borderRadius: "10px"}}>Send</button>
         
                    </div>
                </form>  
                <a href="http://localhost:5000/auth/google" id="test"><i className="fa fa-google fa-fw" width="100px" ></i>Login with Google +</a>  

                 


            </div>
        )
    }
}
export default connect(null,{loginUser}) (Login)
/* 

//import {registerUser} from '../store/actions/userActions'
import { connect } from 'react-redux'


class Login extends Component {
    constructor(props){
        super(props)     
        this.state={
            
            email:"",
            password:"",
            


        }
     this.submitUser=this.submitUser.bind(this)
     this.addChange=this.addChange.bind(this)
 
    }
}

 

 addChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    

 }
   submitUser=(e)=> {
   e.preventDefault()
   const email= this.state.email;
   const password=this.state.password;

   console.log(email,password)
   
   
   
   //this.props.Login(email,password)
  
 } 

           <form onSubmit={this.submitUser} style={{marginLeft: 30, padding:10}}>
                    <div> 
                       
                        <input 
                            type="text" 
                            placeholder="Enter your email" 
                            name="email" required
                            vaule={this.state.email}
                            onChange={this.addChange}>
                        </input>
                        <label htmlFor="psw"><b>Password</b></label>
                        <input 
                            type="password" 
                            placeholder="Enter your Password" 
                            name="password" required
                            value={this.state.password}
                            onChange={this.addChange}>
                        </input>
                        
                     
                        <button type="submit" className="login-button" style={{borderRadius: "10px"}}>Send</button>
                    </div>
                </form>

                
        
    
}
export default connect(null,{registerUser}) ()  */